const { src, dest } = require('gulp')
const paths = require('../paths')

const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber');

function styles() {
    return src(paths.src.styles)
    .pipe(plumber())
    .pipe(sass({
        sourceMap: true,
        precision: 3,
        errLogToConsole: true,
    })).on("error", sass.logError)
    .pipe(dest(paths.build.styles))
  }
  
  module.exports = styles