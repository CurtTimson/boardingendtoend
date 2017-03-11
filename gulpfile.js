var gulp = require("gulp");
var ghPages = require('gulp-gh-pages');

gulp.task('publish', function(){
  return gulp.src('./app/**/**')
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
