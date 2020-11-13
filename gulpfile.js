const gulp = require('gulp')
const webp = require('gulp-webp')

gulp.task('webp', function() {
  return gulp
    .src('./precompile_images/**/*.{svg,gif,png,jpg,jpeg}')
    .pipe(webp())
    .pipe(gulp.dest('./assets/images/'))
})
