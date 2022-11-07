/**
 * Build custom styles files listed in the config
 */
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
//const sass = require('sass-loader');
const autoprefixer = require('autoprefixer');
const gcmq = require('postcss-sort-media-queries');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

sass.compiler = require('sass');

module.exports = () => {
  const production = global.isProduction();
  const { files, isGcmq } = global.getFilesForStylesCustom();
  const plugins = [
    autoprefixer(),
  ];

  if (isGcmq) {
    plugins.push(gcmq({ sort: global.buildStyles.sortType }));
  }
  if (production) {
    plugins.push(cssnano());
  }

  return (done) => {
    if (files.length > 0) {
      return gulp.src(files, { sourcemaps: !production })
        .pipe(sass.sync({ sourceMap: !production }))
        .on('error', (error) => notifier.error(error.message, 'Custom Sass compiling error', done))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(`./${global.folder.dev}/css`, { sourcemaps: './' }));
    }

    return done();
  };
};
