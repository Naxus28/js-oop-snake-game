/*
 * plugins
 */
const glob = require('glob'),
      path = require('path'),
      plugins = require('gulp-load-plugins')();

/*
 * paths to main directories (only developing for dev)
 * @type {Object}
 */
const dirPaths = {
  src: 'src',
  dev: 'builds/development'
};

/*
 * paths to source files
 * @type {Object}
 */
const srcFiles = {
  html: path.join(dirPaths.src, 'index.html'),
  js: path.join(dirPaths.src, 'js/**/*.js')
};

/*
 * paths to destination dir/file
 * @type {Object}
 */
const dest = {
  html: path.join(dirPaths.dev, 'index.html'),
  js: path.join(dirPaths.dev, 'js')
};


/**
 * options for browserify bundle
 * glob.sync creates an array with the js files
 * @type {Object}
 */
let browserifyCustomOpts = { 
  entries: glob.sync(srcFiles.js), 
  debug: true 
};


/**
 * options for 'inject' plugin
 */
const injectOptions = { 
  addRootSlash: false, 
  ignorePath: dirPaths.dev, 
  relative: true 
};


/**
 * notify plugin config--error handler
 * @param  {String} fileType the type of file (.js, .scss)
 * @return {Object} the config 
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
  browserifyCustomOpts,
  dest,
  dirPaths,
  injectOptions,
  notifyConfig,
  srcFiles
};