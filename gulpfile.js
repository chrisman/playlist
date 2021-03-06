var gulp = require('gulp')
var concat = require('gulp-concat')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var sass = require('gulp-sass')
var jade = require('gulp-jade')
var normalize = require('node-normalize-scss')
var image = require('gulp-image')

gulp.task('html', function(){
  return gulp.src('src/views/*jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('src/assets/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'))
})

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  includePaths: normalize.includePaths
}
gulp.task('styles', function(){
  return gulp.src('src/sass/main.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function(){
  return browserify('src/js/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'))
});
gulp.task('pscripts', function(){
  return browserify('src/js/playlist.js')
    .bundle()
    .pipe(source('playlist.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('watchman', function(){
  gulp.watch('src/js/*js', ['scripts'])
  gulp.watch('src/js/playlist.js', ['pscripts'])
  gulp.watch('src/sass/*scss', ['styles'])
  gulp.watch('src/views/**/*jade' ['html'])
});

gulp.task('default',['html', 'scripts', 'pscripts', 'styles', 'watchman']);
