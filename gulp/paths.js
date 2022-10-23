module.exports = {
    src: {
        html: 'src/*.njk',
        styles: 'src/assets/scss/*',
        scripts: 'src/assets/js/app.js',
        images: 'src/assets/images/**/*',
        fonts: 'src/assets/fonts/**/*',
    },
    watch: {
        html: 'src/**/*.njk',
        styles: 'src/assets/scss/**/*.scss',
        scripts: 'src/assets/js/**/*.js',
        images: 'src/assets/images/**/*',
        fonts: 'src/assets/fonts/**/*',
    },
    build: {
        html: 'build',
        styles: 'build/assets/css',
        scripts: 'build/assets/js',
        images: 'build/assets/images',
        fonts: 'build/assets/fonts',
    },
    inject: {
        html: 'build/*.html',
        styles: 'build/assets/css/app.css',
        scripts: 'build/assets/js/*.js',
    },
    clean: 'build/',
}