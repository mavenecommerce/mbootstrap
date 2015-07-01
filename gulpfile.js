/*!
 * Magento-Bootstrap theme builder
 * http://
 * @author MavenEcommerce Inc.
 */
//
// --------------------------------------------------
// -------------------------


// Include gulp and plugins
// --------------------------------------------------
var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
plugins.del             = require('del');
plugins.vinylPaths      = require('vinyl-paths');


// Settings/Configuration
// --------------------------------------------------
var config = cfg = {
    root:       './',
    path:       {},
    theme:      {}
};
config.path = require('./gulpconfig.js')(config.root);


// Import themes settings and task list
// --------------------------------------------------
// Base Theme
// -------------------------
config.theme.base = require('./skin/frontend/base/default/gulp/base.js')(config);

gulp.task('build-base-scripts', require('./skin/frontend/base/default/gulp/tasks/scripts.js')(gulp, plugins, config));

//
// Task
gulp.task('build-base', ['build-base-scripts']);



// Magento-Bootstrap Default Theme
// -------------------------
config.theme.mbootstrap = require('./skin/frontend/mbootstrap/default/gulp/mbootstrap.js')(config);

gulp.task('watch-mbootstrap',               require('./skin/frontend/mbootstrap/default/gulp/tasks/watch')(gulp, plugins, config));
gulp.task('build-mbootstrap-scripts',       require('./skin/frontend/mbootstrap/default/gulp/tasks/scripts')(gulp, plugins, config));
gulp.task('build-mbootstrap-styles-clean',  require('./skin/frontend/mbootstrap/default/gulp/tasks/clean')(gulp, plugins, config));
gulp.task('build-mbootstrap-styles',        require('./skin/frontend/mbootstrap/default/gulp/tasks/sass')(gulp, plugins, config));
gulp.task('build-mbootstrap-styles-ie9',    ['build-mbootstrap-styles'], require('./skin/frontend/mbootstrap/default/gulp/tasks/ie9')(gulp, plugins, config));
gulp.task('build-mbootstrap-images',        require('./skin/frontend/mbootstrap/default/gulp/tasks/imagemin')(gulp, plugins, config));

//
// Task
gulp.task('build-mbootstrap', [
    'build-base',
    'build-mbootstrap-scripts', 'build-mbootstrap-styles-clean', 'build-mbootstrap-styles', 'build-mbootstrap-styles-ie9',
    'build-mbootstrap-images'
]);



// Magento-Bootstrap — Advanced Theme example
// -------------------------
config.theme.advanced = require('./skin/frontend/mbootstrap/advanced/gulp/advanced.js')(config);

gulp.task('watch-mbootstrap-advanced',               require('./skin/frontend/mbootstrap/advanced/gulp/tasks/watch')(gulp, plugins, config));
gulp.task('build-mbootstrap-advanced-styles-clean',  require('./skin/frontend/mbootstrap/advanced/gulp/tasks/clean')(gulp, plugins, config));
gulp.task('build-mbootstrap-advanced-styles',        require('./skin/frontend/mbootstrap/advanced/gulp/tasks/sass')(gulp, plugins, config));

//
// Task
gulp.task('build-mbootstrap-advanced', [
    'build-mbootstrap-advanced-styles-clean', 'build-mbootstrap-advanced-styles'
]);

//
// Default Task
// -------------------------
gulp.task('watch',      ['watch-mbootstrap']);
gulp.task('build',      ['build-mbootstrap']);
gulp.task('default',    ['build']);
