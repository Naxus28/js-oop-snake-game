/*
 * plugins
 */
const plugins = require('gulp-load-plugins')(),
      path = require('path');

/*
 * paths to main directories (only developing for dev)
 */
const dirPaths = {
  src: 'src',
  dev: 'builds/development'
};

/*
 * paths to source files
 */
const srcFiles = {
  html: path.join(dirPaths.src, 'index.html'),
  js: path.join(dirPaths.src, 'js/index.js')
};

/*
 * paths to destination dir/file
 */
const dest = {
  html: path.join(dirPaths.dev, 'index.html'),
  js: path.join(dirPaths.dev, 'js')
};

/**
 * options for 'inject' plugin
 */
const injectOptions = { 
  addRootSlash: false, 
  ignorePath: dirPaths.dev, 
  relative: true 
};


/*
 * notify plugin config--error handler
 */
const notifyConfig = fileType => {
  const config = {
    message: `ERROR ON ${fileType}: <%= error.message %>`,
    sound: false // deactivate Frog sound
  };

  return config;
};


/*
 * export module properties/functions
 */
export default {
  dest,
  dirPaths,
  injectOptions,
  notifyConfig,
  srcFiles
};