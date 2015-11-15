var gulp = require("gulp");

// css

gulp.task("css", function() {
    var postcss = require("gulp-postcss");
    var autoprefixer = require("autoprefixer-core");
    var concat = require("gulp-concat");
    var sass = require("gulp-sass");

    return gulp.src("./public/app/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ["last 2 versions"] }) ]))
        .pipe(gulp.dest("./public/app/"));
});

gulp.task("css:watch", function() {
    gulp.watch("./public/app/style.scss", ["css"]);
});

// jade

gulp.task("jade", function() {
    var jade = require("gulp-jade");

    gulp.src("./public/app/index.jade")
        .pipe(jade())
        .pipe(gulp.dest("./public/app/"));
});

gulp.task("jade:watch", function() {
    gulp.watch("./public/app/index.jade", ["jade"]);
});
