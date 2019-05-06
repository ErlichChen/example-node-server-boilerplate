const gulp = require('gulp');
const { src, dest, series, watch } = require('gulp');
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

function build() {
  return src(paths.src)
    .pipe(babel({
      presets: ['@babel/preset-env'],
      plugins: ['@babel/transform-runtime']
    }))
    .pipe(dest(paths.build));
}

function pm2Restart() {
  return pm2.connect(true, function () {
    pm2.restart('all', function () {
        console.log('pm2 restart');
    });
});
}

function run() {
  return pm2.connect(true, () => {
    var pm2Config = require('./pm2.json');
    pm2.start(pm2Config, () => {
        console.log('pm2 started');
        pm2.streamLogs('all', 0);
    });
  });
}

// watch(paths.src, series(build, pm2Restart));

exports.default = series(clean, build, run);
