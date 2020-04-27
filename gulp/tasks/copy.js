module.exports = function () {
  $.gulp.task('copy', function() {
    return $.gulp.src([
      'fonts/**/*.{woff, woff}',
      'img/**',
      '*.html'
    ], {
      base: '.'
    })

    .pipe($.gulp.dest('build'));
    
  });
};