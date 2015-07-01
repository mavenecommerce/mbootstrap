// This css-buld file fix problem describe here:
// http://stackoverflow.com/questions/11080560/does-ie9-have-a-file-size-limit-for-css
module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.mbootstrap;

        var stream =
            gulp.src( theme.build.css.dir + theme.source.scss.concat )
                .pipe(plugins.rename({suffix: '.ie9'}))
                .pipe(plugins.bless())
                .pipe(gulp.dest( theme.build.css.dir ));

        return cb();
    }
};
