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
      runSequence = require('run-sequence'),
      source = require('vinyl-source-stream');

/*
 * build
 */
gulp.task('build', [
  'clean', 
  'html', 
  'css', 
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
  const cssSource = gulp.src(path.join(config.dest.css,'styles.css'), { read: false });

  return gulp.src(config.dest.html)
    .pipe(plugins.inject(cssSource, config.injectOptions))
    .pipe(plugins.inject(jsSource, config.injectOptions))
    .pipe(gulp.dest(config.dirPaths.dev));
}); 

/*
 * lint js
 */
gulp.task('lint', () => (
  gulp.src(config.srcFiles.js)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
));


/*
 * copy css
 */
gulp.task('css', () => (
  gulp.src(config.srcFiles.css)
    .pipe(gulp.dest(config.dest.css))
));

/*
 * scripts
 */
gulp.task('scripts', ['lint'], () => (
  browserify(config.browserifyCustomOpts)
    .transform('babelify', { presets: ['env'] }) 
    .bundle()
    .on('error', plugins.notify.onError(config.notifyConfig('JAVASCRIPT')))
    .pipe(source('index.js')) // in memory bundled file
    .pipe(buffer()) // need to buffer to be able to use other js plugins
    .pipe(plugins.sourcemaps.init({ loadMaps: true })) 
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.js))
));

/*
 * serve
 */
let browserSyncInit = serveDir => (
  browserSync({
    server: {
      baseDir: serveDir
    }
  })
);

// dev server
gulp.task('serve', ['build', 'watch'], () => browserSyncInit(config.dirPaths.dev));

/*
 * reload servers
 */
gulp.task('reload', done => {
  browserSync.reload();
  done();
}); 

/*
 * watch
 */
gulp.task('watch', () => {
  gulp.watch(config.srcFiles.js, ['scripts', 'reload']);
  gulp.watch(config.srcFiles.css, ['css', 'reload']);
});

