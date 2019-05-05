const gulp = require('gulp');
const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const pm2 = require('pm2');

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
    .pipe(babel({
      presets: ['@babel/preset-env'],
      plugins: ['@babel/transform-runtime']
    }))
    .pipe(dest(paths.build));
}

function watch(cb) {
  cb();
  console.log('watch');
}

function run() {
  return pm2.connect(true, function () {
    var pm2Config = require('./pm2.json');
    pm2.start(pm2Config, function () {
        console.log('pm2 started');
        pm2.streamLogs('all', 0);
    });
  });
}

exports.default = series(clean, build, watch, run);
