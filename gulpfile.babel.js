/*
 * import config
 */
import config from './gulp.config';

/*
 * plugins
 */
const buffer = require('vinyl-buffer'),
      browserSync = require('browser-sync'),
      browserify = require('browserify'),
      del = require('del'),
      gulp = require('gulp'),
      path = require('path'),
      plugins = require('gulp-load-plugins')(),
      source = require('vinyl-source-stream');

/*
 * build
 */
gulp.task('build', [
  'clean', 
  'html', 
  'lint', 
  'scripts', 
  'inject'
]);

/*
 * clean
 */
gulp.task('clean', () => {
  const dir = path.join(config.dirPaths.dev, '/**/*');
  return del.sync(dir);
});

/*
 * html
 */
gulp.task('html', () =>  gulp.src(config.srcFiles.html).pipe(gulp.dest(config.dirPaths.dev)));

/*
 * inject
 */
gulp.task('inject', ['scripts'], () => {
  const jsSource = gulp.src(path.join(config.dest.js,'index.js'), { read: false });
  const targetHtml = config.dest.html;

  return gulp.src(targetHtml)
    .pipe(plugins.inject(jsSource, config.injectOptions))
    .pipe(gulp.dest(config.dirPaths.dev));
}); 

/*
 * scripts
 */
gulp.task('scripts', ['lint'], () => {
  return browserify(config.srcFiles.js)
    .transform('babelify', { presets: ['env'] }) 
    .bundle()
    .on('error', plugins.notify.onError(config.notifyConfig('JAVASCRIPT')))
    .pipe(source('index.js')) // in memory bundled file
    .pipe(buffer()) // need to buffer to be able to use other js plugins
    .pipe(plugins.sourcemaps.init({ loadMaps: true })) 
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.js));
}); 

/*
 * lint js
 */
gulp.task('lint', () => {
  return gulp.src(config.srcFiles.js)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});

/*
 * watch
 */
gulp.task('watch', () => {
  gulp.watch(config.srcFiles.html, () => runSequence('html', 'inject', 'reload'));
  gulp.watch(config.srcFiles.js, () => runSequence('scripts', 'reload'));
});

/*
 * reload servers
 */
gulp.task('reload', () => browserSync.reload());

/*
 * servers
 */
let browserSyncInit = serveDir => {
  browserSync({
    server: {
      baseDir: serveDir
    }
  });
};

// development server
gulp.task('serve', ['build', 'watch'], () => browserSyncInit(config.dirPaths.dev)); 
