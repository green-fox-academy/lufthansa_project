'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('jshint', function () {
  return gulp.src('./*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
      .pipe(notify({
        title: 'JSHint',
        message: 'JSHint Passed. Let it fly!',
      }));
});

gulp.task('jasmine-test', function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine());
});

gulp.task('jscs-reporter', function () {
  return gulp.src([
          'server.js',
          'client/*.js',
          'client/*.jsx',
          'server/*.js',
        ])
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('watch', function () {
  gulp.watch(['./*.js', './*.jsx'], ['jshint', 'jasmine-test', 'jscs-reporter']);
});

gulp.task('checkAll', ['jshint', 'jasmine-test', 'jscs-reporter']);

gulp.task('default', ['watch']);
