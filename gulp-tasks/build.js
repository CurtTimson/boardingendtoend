var gulp = require("gulp");

gulp.task('copy-npm-files', ['copy-npm-files-theme']);

gulp.task('copy-npm-files-theme', () => {
  return gulp.src(['./node_modules/hugo-theme-dopetrope/**/**.**'])
        .pipe(gulp.dest('./site/themes/dopetrope'));
});