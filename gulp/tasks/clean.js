const { src } = require('gulp');
const paths = require('../paths');
const cleaner = require('gulp-rimraf')
const fs = require("fs");

function clean() {
    if (!fs.existsSync(paths.clean)){
        fs.mkdirSync(paths.clean);
    }
    return src(paths.clean, { read: false })
    .pipe(cleaner())
};

module.exports = clean;