module.exports = function (gulp, plugins, config) {
    return function (callback) {

        var theme = config.theme.base;

        // global
        gulp.src( theme.source.js.global.files, {base: config.root})
//            .pipe(plugins.debug())
            .pipe(plugins.concat( config.path.build.js.global.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.global.min ))
            .pipe(plugins.uglify( theme.plugins.uglify ))
            .pipe(gulp.dest( theme.build.js.dir ));

        // catalog
        gulp.src( theme.source.js.catalog.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( config.path.build.js.catalog.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.catalog.min ))
            .pipe(plugins.uglify( theme.plugins.uglify ))
            .pipe(gulp.dest( theme.build.js.dir ));

        // product simple
        gulp.src( theme.source.js.product.simple.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( config.path.build.js.product.simple.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.product.simple.min ))
            .pipe(plugins.uglify( theme.plugins.uglify ))
            .pipe(gulp.dest( theme.build.js.dir ));

        // product configurable
        gulp.src( theme.source.js.product.configurable.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( config.path.build.js.product.configurable.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.product.configurable.min ))
            .pipe(plugins.uglify( theme.plugins.uglify ))
            .pipe(gulp.dest( theme.build.js.dir ));

        // product bundle
        gulp.src( theme.source.js.product.bundle.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( config.path.build.js.product.bundle.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.product.bundle.min ))
            .pipe(plugins.uglify( theme.plugins.uglify ))
            .pipe(gulp.dest( theme.build.js.dir ));

        // product bundle
        gulp.src( theme.source.js.checkout.opc.files )
//            .pipe(plugins.debug())
            .pipe(plugins.concat( config.path.build.js.checkout.opc.concat ))
            .pipe(gulp.dest( theme.build.js.dir ))
            .pipe(plugins.rename( config.path.build.js.checkout.opc.min ))
            .pipe(plugins.uglify( theme.plugins.uglify ))
            .pipe(gulp.dest( theme.build.js.dir ));

        callback();
    };
};
