/**
 *  @fileOverview Uses Gulpjs to publish the app to gh-pages
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:browser-sync
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp        = require('gulp');
var print = require('gulp-print');
var ghPages = require('gulp-gh-pages');
var config      = require('../../config');


gulp.task('ghPages', function () {
  console.log('-------------------------------------------------- BUILD: Deploy to GitHub Pages ');
    return gulp.src('app/**/*')
      .pipe(print())
      .pipe(ghPages());
});
