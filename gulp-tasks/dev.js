var gulp = require("gulp");

var less = require("gulp-less");
var browserSync = require('browser-sync').create();

var lessPath = 'app/style/**/*.less';

gulp.task('dev-watch', function(){

  gulp.watch(lessPath, ['less']);

  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('less', function(){
  return gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest('app/style'))
});
