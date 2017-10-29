const gulp = require("gulp"),//Se importan los modulos o paquetes al archivo
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	imagemin = require("gulp-imagemin");

gulp.task("sass", () => {
	gulp.src("./sass/*.scss")
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
			browsers:["last 5 versions"]
		}))
		.pipe(gulp.dest("./css"))
});
gulp.task("imgmin", () => {
	gulp.src("./img/*")
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe(gulp.dest("./img-opt"))
});
gulp.task("default", () => {
	gulp.watch("./sass/*.scss", ["sass"]);
	gulp.watch("./img/*", ["imgmin"]);
});