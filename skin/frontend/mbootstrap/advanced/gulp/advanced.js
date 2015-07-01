//
//
// Magento-Bootstrap theme resources, dependies and tasks
// --------------------------------------------------

module.exports = function(config) {

    var theme = {
        options:    {
            "package":  "mbootstrap",
            "theme":    "advanced"
        },
        path:       {},
        source:     {},
        build:      {},
        plugins:    {},
        url:        {
            live:   'http://mb.magentolive.nl',
            dev:    'http://mb.dev'
        }
    }

    // Path
    theme.path.skin = {
        dir: config.path.skin.dir + theme.options.package + '/' + theme.options.theme + '/'
    }

    // Source
    theme.source = {
        scss: {
            dir:    theme.path.skin.dir + 'scss/',
            concat: 'advanced.css',
            min:    'advanced.min.css',
            files:  theme.path.skin.dir + 'scss/advanced.scss'
        }
    }

    // Build
    theme.build = {
        dir: theme.path.skin.dir + 'build/',
        css: {
            dir: theme.path.skin.dir + 'build/css/'
        }
    }

    // Plugins
    theme.plugins = {
        autoprefixer: {
            browsers:   ['last 2 versions'],
            cascade:    false
        },
        sass: {
            errLogToConsole:    true,
            style:              'expanded'
        }
    }

    return theme;
};
