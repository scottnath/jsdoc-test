'use strict';
var gulp = require('gulp');
var jsdoc = require("gulp-jsdoc");



gulp.task('jsdoc', function () {

  var files = "./gulp/**/*.js";

  return gulp.src(files)
  .pipe(jsdoc('./app/docs'));

});


gulp.task('jsdoc-docstrap', function () {

  var files = "./gulp/**/*.js";

  return gulp.src(files)
  .pipe(jsdoc('./app/docs-docstrap',{
    path: 'node_modules/gulp-jsdoc/node_modules/ink-docstrap/template'
  }));
});
