[200~var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
let cleanCSS = require('gulp-clean-css');
var path = require('path');


gulp.task('default', ['less', 'js']);

gulp.task('less', function () {
	  return gulp.src('./src/public/styles/**/**.less')
	    .pipe(concat('style.css'))
	    .pipe(less({
		          paths: [ path.join(__dirname, 'style.css') ]
		        }))
	    .pipe(cleanCSS({compatibility: 'ie8'}))
	    .pipe(gulp.dest('./src/public/_css'));
});


gulp.task('js', function() {
	    return gulp.src('./src/public/js/**.js')
	      .pipe(concat('scripts.js'))
	      .pipe(babel({
		                presets: ['es2015']
		            }))
	      .pipe(uglify())
	      .pipe(gulp.dest('./src/public/_javascript'));
});

