'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var postcss = require('gulp-postcss');
var cssnext = require('cssnext');

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

gulp.task('css', function() {
  var processor = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnext(),
    precss
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
