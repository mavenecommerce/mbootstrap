module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.mbootstrap;

        var stream =
            gulp.src( theme.build.fonts.bootstrap.src )
                .pipe( gulp.dest( theme.build.fonts.bootstrap.dest ) );

        return cb();
    }
};
