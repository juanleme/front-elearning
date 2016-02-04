var gulp        = require('gulp');

var less        = require('gulp-less');
var minifycss   = require('gulp-minify-css');
var bless       = require('gulp-bless');
var clean       = require('gulp-clean');
var livereload  = require('gulp-livereload');
var connect     = require('gulp-connect');



// LESS
gulp.task('less', function() {
    return gulp.src('assets/less/styles.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(bless({
            imports: true
        }))
        .pipe(gulp.dest('assets/css'));
});

// Clean
gulp.task('clean', function() {
    return gulp.src(['assets/css'], {read: false})
        .pipe(clean());
});

// Watch
gulp.task('watch', function() {

    // Watch .less files
    gulp.watch(['assets/less/*.less', 'assets/external/*/less/*.less', 'assets/external/*/less/*/*.less'], ['less']);
});

gulp.task('server', function () {
    connect.server({
        root: './',
        port: 8090,
        fallback: 'index.html'
    });
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.run('less', 'watch');
});
