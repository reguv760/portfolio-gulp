/* eslint-disable import/no-extraneous-dependencies, space-before-function-paren, func-names, function-paren-newline */
const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
     sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () =>
  del(['./src/temp/sprite/**/*.*', './src/assets/sprite/**/*.svg'])
);

gulp.task('createSprite', ['beginClean'], () =>
  gulp
    // grab all the svgs inside the icons folder
    .src('./src/assets/icons/*.svg')
    // use the template var
    .pipe(svgSprite(config))
    // output generated sprite to tmp file
    .pipe(gulp.dest('./src/temp/sprite'))
);

gulp.task('copySpriteGraphic', ['createSprite'], () =>
  gulp
    .src('./src/temp/sprite/css/*.{svg,png}')
    .pipe(gulp.dest('./src/assets/sprite/'))
);

gulp.task('copySpriteCSS', ['copySpriteGraphic'], () =>
  gulp
    // grab all the sprites generated
    .src('./src/temp/sprite/css/**/*.css')
    // rename to partial `_sprites`
    .pipe(rename('_sprite.css'))
    // copy file and move copy to modules directory
    .pipe(gulp.dest('./src/assets/css/modules'))
);


gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () =>
  del('./src/temp/sprite/**/*.*')
);

gulp.task('icons', [
  'beginClean',
  'createSprite',
  'copySpriteGraphic',
  'copySpriteCSS',
  'endClean'
]);
