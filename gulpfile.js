var gulp = require('gulp');
// Requires plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');
var useref = require('gulp-useref');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('autoprefixer', function () {
	return gulp.src('app/css/**/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
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

gulp.task('jade', function () {
  return gulp.src('app/jade/**/*.jade')
  .pipe(jade({
      pretty: true
    }))
  .pipe(gulp.dest('app/'))
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


gulp.task('serve', ['browserSync', 'autoprefixer', 'sass', 'js', 'jade', 'html'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/jade/**/*.jade', ['jade'])
  gulp.watch('app/*.html', ['html']);
  // Other watchers
})
