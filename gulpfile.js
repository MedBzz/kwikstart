'use strict';

const { series, parallel, watch } = require('gulp');
const dir = require('require-dir');
const browser = require('browser-sync').create();

const tasks = dir('./gulp/tasks', { recurse: true });
const paths = require('./gulp/paths');

const serve = () => {
    return browser.init({
        server: 'build',
        notify: false,
        open: false,
        cors: true,
        ui: false,
        logPrefix: 'development',
        host: 'kuickster',
        port: process.env.PORT || 1993,
    });
};

const watcher = done => {
    watch(paths.watch.html).on(
        'change', series(tasks.html, tasks.injects, browser.reload),
    );
    watch(paths.watch.styles).on('change', series(tasks.styles, browser.reload));
    watch(paths.watch.scripts).on('change', series(tasks.scripts, browser.reload));
    watch(paths.watch.images, tasks.images);
    done();
};

exports.build = series(
    tasks.clean,
    tasks.images,
    parallel(tasks.html, tasks.styles, tasks.scripts),
    tasks.injects,
);

exports.start = series(
    tasks.clean,
    tasks.images,
    parallel(tasks.html, tasks.styles, tasks.scripts),
    tasks.injects,
    watcher,
    serve,
);