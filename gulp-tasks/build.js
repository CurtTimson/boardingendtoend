var gulp = require("gulp");
var runSequence = require('run-sequence');
var rename = require('gulp-rename');

var baseDir = "holding-page";

gulp.task('build-files', function(){
  return gulp.src('./' + baseDir + '/**/**')
    .pipe(gulp.dest('dist'));
});

gulp.task('build-config', function() {

  var file = "production"

  console.log("Config: " + file);

  return gulp.src('config/' + file + '.js')
             .pipe(rename('config.js'))
             .pipe(gulp.dest('dist/scripts'));
});


gulp.task('build', function(){
  runSequence('build-files', 'build-config');
});
