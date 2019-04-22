const { series } = require('gulp');

function clean(cb) {
  cb();
  console.log('clean');
}

function build(cb) {
  cb();
  console.log('build');
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
