// npm install --save-dev gulp gulp-postcss gulp-sass gulp-cssnano gulp-sourcemaps autoprefixer gulp-plumber gulp-watch lost gulp-rucksack gulp-newer gulp-imagemin

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var lost = require('lost');
var rucksack = require('gulp-rucksack');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');

gulp.task('workflow', function () {
  return gulp.src('./src/sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            sourceComments: 'map',
            errLogToConsole: true
        }))
        .pipe(postcss([
          lost(),
          autoprefixer({
            browsers: ['last 2 versions'] })
          ]))
        .pipe(rucksack())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .on('error', sass.logError)
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('default', function () {
	gulp.watch('./src/sass/**/*.sass', ['workflow']);
});
