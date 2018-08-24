/* eslint-disable import/no-extraneous-dependencies, func-names */
const gulp = require('gulp');
const gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();


gulp.task('previewdocs', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('deletedocsFolder', () => del('./docs'));

gulp.task('copyGeneralFiles', ['deletedocsFolder'], () => {
  const pathsToCopy = [
    './src/**/*',
    './src/*.html',
    '!./src/assets/img/**',
    '!./src/assets/icons/**',    
    '!./src/assets/css/**',
    '!./src/assets/js/**',
    '!./src/temp/',
    '!./src/temp/**'
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deletedocsFolder', 'icons'], () => gulp.src([
  './src/assets/img/*',
  './src/assets/img/**/*'
])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))

  .pipe(gulp.dest('./docs/assets/img'))
);

gulp.task('copyOptimizeIcons', ['deletedocsFolder', 'optimizeImages'], () => gulp.src([
  './src/assets/icons/*.svg'
])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))

  .pipe(gulp.dest('./docs/assets/icons'))
);


gulp.task('usemin', ['deletedocsFolder', 'styles', 'scripts'], () => gulp
  .src('./src/*.html')
  .pipe(usemin({
    css: [function () { return rev(); }, function () { return cssnano(); }],
    js: [function() {return uglify()}, function(){return rev()}]
    // scripts: [function () { return rev(); }, function () {
    //   return uglify(); }]
    //scripts: [uglify().on('error', function(err) {gutil.log(gutil.colors.red('[Error]'), err.toString());this.emit('end');}),rev()]
  }))
  .pipe(gulp.dest('./docs'))
);

gulp.task('build', ['deletedocsFolder', 'copyGeneralFiles', 'optimizeImages', 'copyOptimizeIcons', 'usemin']);
