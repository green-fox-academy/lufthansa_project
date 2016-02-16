'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

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

gulp.task('css', function () {
  var processors = [
    autoprefixer({ browsers: ['last 2 version'] }),
    cssnext(),
    precss,
  ];
  return gulp.src('./public/style/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function () {
  gulp.watch(['./*.js', './*.jsx'], ['jshint', 'jasmine-test', 'jscs-reporter']);
});

gulp.task('checkAll', ['jshint', 'jasmine-test', 'jscs-reporter', 'css']);

gulp.task('default', ['watch']);
