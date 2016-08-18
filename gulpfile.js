const gulp = require('gulp');
const minifycss = require('gulp-clean-css');
//const uglify = require('gulp-uglify');
const concatcss = require('gulp-concat-css');
//const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const minifyhtml = require('gulp-minify-html');
const htmlreplace = require('gulp-html-replace');

gulp.task('default', ['css','img','html']);

// CSS minification task
gulp.task('css', function() {
  return gulp.src('src/css/*.css')
    .pipe(concatcss('style.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

// JS minification task
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('js'));
});

// Image optimization task
gulp.task('img', function () {
  return gulp.src('src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});

// minify HTML task
gulp.task('html', function () {
  return gulp.src('src/*.html')
  .pipe(htmlreplace({
      'css': 'css/style.min.css'
  }))
    .pipe(minifyhtml())
    .pipe(gulp.dest(''));
});
