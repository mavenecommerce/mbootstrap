module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.mbootstrap;

        // jquery
        gulp.src( theme.source.js.jquery.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( theme.source.js.jquery.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( theme.source.js.jquery.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( theme.build.js.dir ));

        // bootstrap
        gulp.src( theme.source.js.bootstrap.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( theme.source.js.bootstrap.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( theme.source.js.bootstrap.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( theme.build.js.dir ));

        // scripts
        gulp.src( theme.source.js.jquery.scripts.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( theme.source.js.jquery.scripts.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( theme.source.js.jquery.scripts.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( theme.build.js.dir ));

        // plugins
        gulp.src( theme.source.js.jquery.plugins.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( theme.source.js.jquery.plugins.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( theme.source.js.jquery.plugins.min ))
            .pipe(plugins.uglify())
            .pipe(gulp.dest( theme.build.js.dir ));

        cb();
    };
};
