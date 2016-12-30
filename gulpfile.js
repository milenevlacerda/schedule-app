let gulp      = require("gulp");
var uglify    = require("gulp-uglify");
var concat    = require("gulp-concat");
var rename    = require('gulp-rename');
var cssmin    = require('gulp-cssmin');
var concatCss = require('gulp-concat-css');


gulp.task( 'scripts', () => {

    gulp.src([
        './public/js/lib/*.js',
        './public/js/main.js',
        './public/js/controllers/*.js',
        './public/js/directives/*.js',
        './public/js/services/*.js',
    ])
    .pipe( concat( 'main.js' ) )
    .pipe( gulp.dest( './public/dist' ) );
});

gulp.task('styles', function () {
    console.log('Minificando CSS...');

    gulp.src([ './public/css/*.css' ])
        .pipe( concatCss( 'main.concat.css' ) )
        .pipe( cssmin() )
        .pipe( rename( 'main.concat.min.css' ) )
        .pipe( gulp.dest( './public/dist' ) );

});

gulp.task('default', ['scripts', 'styles']);
