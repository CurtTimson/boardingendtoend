var gulp = require("gulp");

var less = require("gulp-less");
var browserSync = require('browser-sync').create();

var baseDir = "holding-page";
var lessPath = baseDir + '/style/**/*.less';

gulp.task('dev-watch', function(){

  gulp.watch(lessPath, ['less']);

  browserSync.init({
    server: {
      baseDir: baseDir
    }
  });
});

gulp.task('less', function(){
  return gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest(baseDir + '/style'))
});
