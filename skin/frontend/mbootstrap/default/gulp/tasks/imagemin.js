module.exports = function (gulp, plugins, config) {
    return function () {

        var theme = config.theme.mbootstrap;

        gulp.src( theme.source.images.files )
            .pipe(plugins.cache( plugins.imagemin() ))
//            .pipe(plugins.debug())
            .pipe(gulp.dest( theme.build.images.dir ));
    };
};
