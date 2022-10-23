const { src, dest } = require('gulp')
const paths = require('../paths')

  
function images() {
    return src(paths.src.images)
    .pipe(dest(paths.build.images));
};
  
module.exports = images;