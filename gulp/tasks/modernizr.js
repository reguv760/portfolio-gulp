const gulp = require('gulp');
const modernizr = require('gulp-modernizr');

gulp.task('modernizr', () => gulp
  .src(['./src/assets/js/*.js'])
  .pipe(modernizr({
    options: ['setClasses']
  }))

  .pipe(gulp.dest('./dist/assets/js/')) //location for final build::
  .pipe(gulp.dest('./src/assets/js/')) 
 );
