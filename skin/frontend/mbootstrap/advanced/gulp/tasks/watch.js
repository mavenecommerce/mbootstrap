module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.advanced;

        gulp.watch([
            theme.source.js.jquery.files,
            theme.source.js.bootstrap.files,
            theme.source.js.jquery.scripts.files,
            theme.source.js.dir + '**/*.js'
        ], ['build-advanced-scripts']);

        gulp.watch(theme.source.scss.dir + '**/*.scss', ['build-advanced-styles']);

        cb();
    };
};
