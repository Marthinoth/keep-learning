var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var notify = require('gulp-notify');
var del = require('del');
var server = require('gulp-express');

gulp.task('copy-js', function() {
	gulp.src('./public/src/scripts/**/*')
		.pipe(gulp.dest('./public/build/scripts/'))
		.pipe(notify({message: 'copy-js task complete'}));

});

gulp.task('copy-html', function() {
	gulp.src('./public/src/*.html')
		.pipe(gulp.dest('./public/build/'))
		.pipe(notify({message: 'copy-html task complete'}));

});

gulp.task('copy-json', function() {
  gulp.src('./public/src/scripts/*.json')
    .pipe(gulp.dest('./public/build/scripts/'))
    .pipe(notify({message: 'copy-json task complete'}));

});

gulp.task('browserify', function() {
	gulp.src('./public/src/components/**/*')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./public/build/components/'))
		.pipe(notify({message: 'browserify task complete'}));

});

gulp.task('clean', function(cb) {
    del(['public/build/components/*',
    	 'public/build/scripts/*',
    	 'public/build/*.html',
       'public/build/*.json'
    	], cb)
});

gulp.task('watch', function() {
  gulp.watch('./public/src/*.html', ['copy-html']);
  gulp.watch('./public/src/scripts/*.json', ['copy-json']);
  gulp.watch('./public/src/scripts/**/*', ['copy-js']);
  gulp.watch('./public/src/components/**/*.jsx', ['browserify']);
});

gulp.task('server', function () {
    //start the server at the beginning of the task
    server.run({
        file: 'server.js'
    });
    notify({message: 'server task complete'});
});


gulp.task('build', ['clean', 'copy-html', 'copy-json', 'copy-js', 'browserify']);

gulp.task('default', ['build', 'watch', 'server']);


