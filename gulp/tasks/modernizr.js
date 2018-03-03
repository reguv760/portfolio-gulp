const gulp = require('gulp');
const modernizr = require('gulp-modernizr');

gulp.task('modernizr', () => gulp
  .src(['./src/assets/styles/**/*.css', './src/assets/js/**/*.js'])
  .pipe(modernizr({
    options: ['setClasses']
  }))
  .pipe(gulp.dest('./src/temp/scripts/')));
