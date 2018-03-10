/* eslint-disable import/no-extraneous-dependencies, func-names */
const gulp = require('gulp');
const util = require('gulp-util');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();


gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('deleteDistFolder', () => del('./dist'));

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathsToCopy = [
    './src/**/*',
    './src/*.html',
    '!./src/assets/img/**',
    '!./src/assets/icons/**',
    '!./src/assets/css/**',
    '!./src/assets/js/**',
    './src/assets/sprites/**',
    '!./src/temp/',
    '!./src/temp/**'
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], () => gulp.src([
  './src/assets/img/*',
  './src/assets/img/**/*'
])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))

  .pipe(gulp.dest('./dist/assets/img'))
);

gulp.task('copyOptimizeIcons', ['deleteDistFolder', 'optimizeImages'], () => gulp.src([
  './src/assets/icons/*.svg'
])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))

  .pipe(gulp.dest('./dist/assets/icons'))
);


gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], () => gulp
  .src('./src/*.html')
  .pipe(usemin({
    css: [function () { return rev(); }, function () { return cssnano(); }],
    js: [function () { return rev(); }, function () {
      return uglify();
    }]
  }))
  .pipe(gulp.dest('./dist'))
);

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'copyOptimizeIcons', 'usemin']);
