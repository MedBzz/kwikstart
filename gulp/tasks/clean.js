const { src } = require('gulp');
const paths = require('../paths');
const cleaner = require('gulp-rimraf')

function clean() {
    return src(paths.clean, { read: false })
    .pipe(cleaner())
};

module.exports = clean;