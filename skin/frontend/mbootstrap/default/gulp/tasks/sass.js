module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.mbootstrap;

        var stream =
            gulp.src( theme.source.scss.files )
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass( theme.plugins.sass ))
                // Catch any SCSS errors and prevent them from crashing gulp
                .on('error', function (error) {
                    console.error(error);
                    this.emit('end');
                })
                .pipe(gulp.dest( theme.build.css.dir ))
                .pipe(plugins.autoprefixer( theme.plugins.autoprefixer ))
                .pipe(plugins.sourcemaps.write('.', { includeContent: false, sourceRoot: theme.path.skin.dir }))
                .pipe(plugins.cssBase64( theme.plugins.cssBase64 ))
                .pipe(gulp.dest( theme.build.css.dir ))

                .pipe(plugins.rename({suffix: '.min'}))
                .pipe(plugins.minifyCss( theme.plugins.minifyCss ))
                .pipe(gulp.dest( theme.build.css.dir ));

        return stream;
    }
};
