const gulp = require('gulp');
const modernizr = require('gulp-modernizr');

gulp.task('modernizr', () => gulp
  .src(['./src/assets/js/*.js'])
  .pipe(modernizr({
    options: ['setClasses']
  }))

  .pipe(gulp.dest('./docs/assets/js/')) //location for final build::
  .pipe(gulp.dest('./src/temp/js/')) //location for dev:::
 );
