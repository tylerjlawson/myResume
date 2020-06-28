var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

const scssDir = 'assets/css/sass';
const cssDir  ='assets/css/stylesheets';

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(scssDir + '/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDir));
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
  browserSync.init({
    server: '.'
  });
});

gulp.task('watch', function() {
  gulp.watch(scssDir + '/*.scss', gulp.series('sass'));
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('serve', 'watch', 'sass'));
