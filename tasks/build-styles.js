/**
 * Build styles for application
 */
/*'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
//const sass = require('sass-loader');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gcmq = require('postcss-sort-media-queries');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

sass.compiler = require('sass');

module.exports = function () {
  const production = global.isProduction();
  const mainFileName = production ? global.file.mainStylesMin : global.file.mainStyles;
  //const plugins = [
  //  autoprefixer(),
  //];
//
  //if (production) {
  //  plugins.push(gcmq({ sort: global.buildStyles.sortType, }));
  //  plugins.push(cssnano());
  //}

  return (done) => {
    return gulp.src(`./${global.folder.src}/scss/${global.file.mainStylesSrc}`, { sourcemaps: !production })
      .pipe(rename(mainFileName))
      .pipe(sass.sync({ sourceMap: !production, }))
      .on('error', (error) => notifier.error(error.message, 'Main Sass compiling error', done))
      //.pipe(postcss(plugins))
      .pipe(gulp.dest(`./${global.folder.dev}/css`, { sourcemaps: './' }));
  };
};*/

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
// const sass = require('sass-loader');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gcmq = require('postcss-sort-media-queries');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

sass.compiler = require('sass');

module.exports = () => {
  const production = global.isProduction();
  const mainFileName = production ? global.file.mainStylesMin : global.file.mainStyles;
  const files = global.getFilesForStylesCustom();
  const plugins = [
    autoprefixer('last 1 version', '> 1%'),
    cssnano(),
  ];

  if (production) {
    plugins.push(gcmq({ sort: global.buildStyles.sortType }));
    plugins.push(cssnano());
  }

  return (done) => {
    if (files) {
      return gulp.src(`./${global.folder.src}/scss/${global.file.mainStylesSrc}`, { sourcemaps: !production })
        .pipe(rename(mainFileName))
        .pipe(sass.sync({ sourceMap: !production }))
        .pipe(sass.sync(postcss(plugins)))
        .on('error', (error) => notifier.error(error.message, 'Main Sass compiling error', done))
        .pipe(gulp.dest(`./${global.folder.dev}/css`, { sourcemaps: './' }));
    }
    return done();
  };
};
