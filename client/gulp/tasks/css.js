import gulp from 'gulp';
import sass from 'gulp-sass';
import paths from '../config';

gulp.task('build:css', () => {
  return gulp.src(paths.source.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.build.css));
});
