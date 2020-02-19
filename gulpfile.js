
let
    gulp          = require('gulp'),
    sass           = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    cleanCSS      = require("gulp-clean-css");


//- Plugins Files CSS (Concat and Minify)
gulp.task('minCSS', function(){
    return gulp.src(['src/css/plugins/*.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('assets/css/'))
});


//- Compile SASS
gulp.task('scss', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});


//- Watching Files
gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss',gulp.series('scss'));
});

//will watch in changes in the files
gulp.task('serve', function() {
    gulp.watch('src/scss/**/*.scss',gulp.series('scss'));
});


