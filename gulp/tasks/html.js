const { src, dest } = require('gulp');
const paths = require('../paths');
const nunjucks = require('gulp-nunjucks');

const data = {
    name: 'Quick Start'
}

function html() {
    return src(paths.src.html)
    .pipe(nunjucks.compile(data))
    .pipe(dest(paths.build.html))
}

module.exports = html;