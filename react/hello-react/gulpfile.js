var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('copy-js', function() {
	gulp.src('./public/src/scripts/**/*')
		.pipe(gulp.dest('./public/build/scripts/'))
		.pipe(notify({message: 'copy-js task complete'}));

});

gulp.task('compile-react', function() {
	gulp.src('./public/src/components/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('./public/build/components'))
		.pipe(notify({message: 'compile-react task complete'}));
});

gulp.task('browserify', function() {
	gulp.src('./public/src/components/**/*')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./public/build/components/'))
		.pipe(notify({message: 'browserify task complete'}));

});

gulp.task('clean', function(cb) {
    del(['public/build/components/*', 'public/build/scripts/*'], cb)
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./public/src/components/**/*.jsx', ['compile-react', 'browserify']);
  gulp.watch('./public/src/scripts/**/*', ['copy-js']);
});

gulp.task('build', ['clean', 'compile-react', 'copy-js', 'browserify']);

gulp.task('default', ['watch']);


