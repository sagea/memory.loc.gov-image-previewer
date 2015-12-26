var gulp = require('gulp'),
    zip = require('gulp-zip'),
    packageJson = require('./package.json');


var urls = {
    src: 'src/',
    build: 'build/'
};

gulp.task('default', function(){
    return gulp.src(urls.src)
        .pipe(zip(packageJson.name + '.zip'))
        .pipe(gulp.dest(urls.build));
});