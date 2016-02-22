'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jest = require('gulp-jest');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('jshint', function () {
  return gulp.src('./*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jasmine-test', function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine());
});

gulp.task('jest', function () {
  return gulp.src('__test__/*.js')
    .pipe(jest());
});


gulp.task('jscs-reporter', function () {
  return gulp.src([
          'server.js',
          // 'client/*.js',
          // 'client/*.jsx',
          'server/*.js',
        ])
    .pipe(jscs())
    .pipe(jscs.reporter());
});


gulp.task('watch', function () {
  gulp.watch(['./*.js', './*.jsx'], ['jshint', 'jasmine-test', 'jscs-reporter']);
});

gulp.task('checkAll', ['jshint', 'jasmine-test', 'jest', 'jscs-reporter']);

gulp.task('default', ['watch']);
