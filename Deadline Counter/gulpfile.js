var gulp =require("gulp");
var sass =require("gulp-sass");

gulp.task("ready",function outMessage () { console.log("gulp is ready.")});
gulp.task("scss",function(){
 return gulp.src("./sass/*.scss")
 .pipe(sass())
 .pipe(gulp.dest("./css"))   
});
gulp.task("build",function(){

})