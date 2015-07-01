module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.advanced;

        var stream =
            gulp.src( theme.build.css.dir )
                .pipe( plugins.vinylPaths(plugins.del) );

        return cb();
    }
};
