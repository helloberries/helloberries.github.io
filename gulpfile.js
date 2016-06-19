var gulp = require('gulp');
// Requires plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var gutil = require('gulp-util');


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
      .pipe(browserSync.reload({
        stream: true
      }))
})

gulp.task('html', function() {
    return gulp.src('app/*.html')
      .pipe(browserSync.reload({
        stream: true
      }))
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
})


gulp.task('serve', ['browserSync', 'sass', 'js'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/*.html', ['html']);
  // Other watchers
})
