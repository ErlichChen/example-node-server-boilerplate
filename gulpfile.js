const gulp = require('gulp');
const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

const paths = {
  src: ['src/**/*.js'],
  test: ['src/**/test*.js'],
  build: 'build'
}

function clean() {
  return del(['build'])
}

function build(cb) {
  return src(paths.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.build));
}

function watch(cb) {
  cb();
  console.log('watch');
}

function run(cb) {
  cb();
  console.log('run');
}

exports.default = series(clean, build, watch, run);
