/**
 * Created by wmj on 2016/2/25.
 */
var gulp = require('gulp');
var program=require('commander');
var connect=require('gulp-connect');
var uglify = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps'),
    concat=require('gulp-concat'),
    clean=require('gulp-clean');
require('es6-shim');
gulp.task('server:web',['watch:html'],function(){
    connect.server({
        port:8080,
        root:'www',
        host:'dev.com',
        livereload:true,
    });

});


gulp.task('watch:html',function(){

   return  gulp.watch(['www/**/*.html'],function(event){
        if(event.type==='changed'){

            gulp.src(event.path)
                .pipe(   connect.reload());

        }

    })
});



gulp.task('minify:js',function(){

    return gulp.src(['public/assets/src/js/**/*.js'])
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write('source_maps'))
        .pipe(gulp.dest('public/assets/build/js'))



});


gulp.task('build:js',['minify:js','concat:js']);
gulp.task('concat:js',['minify:js'],function(){

});
gulp.task('server:assets:dev',function(){

    connect.server({
        port:80,
        root:'public/assets/src',
        host:'assets.dev.com',
        livereload:false,


    });

});

gulp.task('server:assets:production',function(){

    connect.server({
        port:80,
        root:'public/assets/build',
        host:'assets.dev.com',


    });

});