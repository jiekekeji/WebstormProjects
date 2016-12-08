var gulp = require('gulp');
//压缩js文件插件
var uglify = require("gulp-uglify");
//js代码检查
var jshint = require("gulp-jshint");
//压缩css文件插件
var minifyCss = require("gulp-minify-css");
//压缩html文件插件
var minifyHtml = require("gulp-minify-html");
//文件合并
var concat = require("gulp-concat");
//less编译器
var less = require("gulp-less");
// sass编译器
var sass = require("gulp-sass");
//图片压缩
var imagemin = require('gulp-imagemin');
//png图片压缩插件
var pngquant = require('imagemin-pngquant');


//压缩js文件
gulp.task('minify-js', function () {
    gulp.src('./src/js/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,
        .pipe(gulp.dest('dist/js')); //压缩后的路径
});
//检查js代码
gulp.task('jsLint', function () {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter()); // 输出检查结果
});
// 压缩css文件
gulp.task('minify-css', function () {
    gulp.src('./src/css/*.css') // 要压缩的css文件
        .pipe(minifyCss()) //压缩css
        .pipe(gulp.dest('dist/css'));
});
// 压缩html文件
gulp.task('minify-html', function () {
    gulp.src('./src/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/'));
});
//合并文件
gulp.task('concat', function () {
    gulp.src('./src/js/*.js')  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('dist/js'));
});
//less编译器
gulp.task('compile-less', function () {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});
//sass编译器
gulp.task('compile-sass', function () {
    gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
//图片压缩
gulp.task('default', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist/images'));
});

