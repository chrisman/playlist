var gulp = require('gulp')
var concat = require('gulp-concat')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var sass = require('gulp-sass')
var jade = require('jade')

gulp.task('html', function(){
  return gulp.src('src/views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
});

gulp.task('styles', function(){
  return gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function(){
  return browserify('src/js/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watchman', function(){
  gulp.watch('src/js/*js', ['scripts'])
  gulp.watch('src/sass/*scss', ['styles'])
  gulp.watch('src/index.html' ['html'])
});

gulp.task('default',['html', 'scripts', 'styles', 'watchman']);
