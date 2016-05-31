'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('styles', function () {
    return gulp.src('src/css/*.css')
        .pipe(concatCss('styles.min.css'))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    gulp.start('styles', 'scripts');
    gulp.watch('src/css/*.css', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});