var gulp   = require("gulp");
var uglify = require("gulp-uglify");
var watch  = require("gulp-watch");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");


gulp.task( "default", function() {
    console.log( "Gulp default task is working!" );
});


gulp.task('uglifyJS', function () {
    gutil.log('Starting uglifyJS task.');

    gulp.src([
        'public/js/main.js',
        'public/js/controllers/*.js',
        'public/js/controllers/*.js',
        'public/js/services/*.js'
    ])
    .pipe( uglifyJS() )
    .pipe( gulp.dest( 'dist/js' ));
});

gulp.task('uglifyCSS', function () {
    gutil.log('Starting uglifyCSS task.');

    gulp.src([
        'public/css/main.css'
    ])
    .pipe( uglifyJS() )
    .pipe( gulp.dest( 'dist/css' ));
});
