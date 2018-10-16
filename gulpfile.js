var gulp = require('gulp');
var serve = require('gulp-serve');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var del = require('del')
var ngAnnotate = require('gulp-ng-annotate');
var imagemin = require('gulp-imagemin');
var eslint = require('gulp-eslint');
var pump = require('pump');


gulp.task('serve', serve('./'));

gulp.task('build', ['css', 'js', 'html', 'images']);


gulp.task('check-code', function () {
	return gulp.src(['**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());
});


gulp.task('clean', function () {
	return del(['dist'])
})

gulp.task('custom-css', ['clean'], function () {
	return gulp.src(['app/**/*.css'])
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
})

gulp.task('css', ['clean', 'custom-css'], function () {
	return gulp.src([
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
	])
		.pipe(gulp.dest('dist/css/lib'))
})

gulp.task('js', ['clean'], function () {
	return gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/angular/angular.js',
		'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
		'node_modules/angular-animate/angular-animate.js',
		'./app.module.js',
		'app/**/*.js'
	])
		.pipe(concat('all.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
})

gulp.task('html', ['clean'], function () {
	return gulp.src(['app/**/*.html'])
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist/html'));
})

gulp.task('images', function () {
	return gulp.src('app/assets/*.+(png|jpg|gif|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('uglify-error-debugging', function (cb) {
	pump([
	  gulp.src('app/**/*.js'),
	  uglify(),
	  gulp.dest('dist')
	], cb);
  });