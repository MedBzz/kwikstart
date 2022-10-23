const { src, dest } = require('gulp')
const paths = require('../paths')

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


function scripts() {
    return browserify({
        entries: paths.src.scripts,
        debug: true,
        transform: [
            babelify.configure({ presets: ['@babel/preset-env'] }),
        ],
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(dest(paths.build.scripts))
}
  
module.exports = scripts