//
//
// Magento-Bootstrap theme resources, dependies and tasks
// --------------------------------------------------

module.exports = function(config) {

    var theme = {
        options:    {
            "package":  "mbootstrap",
            "theme":    "default"
        },
        path:       {},
        source:     {},
        build:      {},
        plugins:    {},
        url:        {
            live:   'http://mbo.magentolive.nl',
            dev:    'http://mb.dev'
        }
    }

    // Path
    theme.path.skin = {
        dir: config.path.skin.dir + theme.options.package + '/' + theme.options.theme + '/'
    }

    // Fonts
    theme.fonts = {
        dir: theme.path.skin.dir + 'fonts/'
    }

    // Botstrap
    theme.path.bootstrap = {
        dir: config.path.vendor.dir + 'twbs/bootstrap-sass/'
    }
    theme.path.bootstrap.css    = { dir: theme.path.bootstrap.dir + 'assets/stylesheets/bootstrap/' }
    theme.path.bootstrap.js     = { dir: theme.path.bootstrap.dir + 'assets/javascripts/bootstrap/' }
    theme.path.bootstrap.fonts  = { dir: theme.path.bootstrap.dir + 'assets/fonts/bootstrap/' }

    // Source
    theme.source = {
        images: {
            files: [
                theme.path.skin.dir + 'images/**/*.*'
            ]
        },
        scss: {
            dir:    theme.path.skin.dir + 'scss/',
            concat: 'mbootstrap.css',
            min:    'mbootstrap.min.css',
            core:   'mbootstrap.core.css',
            coreMin:'mbootstrap.core.min.css',
            files:  theme.path.skin.dir + 'scss/mbootstrap.scss'
        },
        js: {
            dir: theme.path.skin.dir + 'js/',
            bootstrap: {
                concat: 'bootstrap.js',
                min:    'bootstrap.min.js',
                files: [
                    //theme.path.bootstrap.js.dir + 'affix.js'
                    //,theme.path.bootstrap.js.dir + 'alert.js'
                    //,theme.path.bootstrap.js.dir + 'button.js'
                    //,theme.path.bootstrap.js.dir + 'carousel.js'
                    theme.path.bootstrap.js.dir + 'collapse.js'
                    ,theme.path.bootstrap.js.dir + 'dropdown.js'
                    //,theme.path.bootstrap.js.dir + 'tab.js'
                    ,theme.path.bootstrap.js.dir + 'transition.js'
                    //,theme.path.bootstrap.js.dir + 'scrollspy.js'
                    ,theme.path.bootstrap.js.dir + 'modal.js'
                    //,theme.path.bootstrap.js.dir + 'tooltip.js'
                    //,theme.path.bootstrap.js.dir + 'popover.js'
                ]
            },
            jquery: {
                concat: 'jquery.js',
                min:    'jquery.min.js',
                files:  [
                    theme.path.skin.dir + 'js/jquery/jquery.js'
                    ,theme.path.skin.dir + 'js/jquery/jquery.noConflict.js'
                ],

                plugins: {
                    concat: 'jquery.plugins.js',
                    min:    'jquery.plugins.min.js',
                    files: [
                        theme.path.skin.dir + 'js/jquery/plugins/jquery.cycle2.min.js'
                        ,theme.path.skin.dir + 'js/jquery/plugins/jquery.cycle2.swipe.min.js'
                    ]
                },
                scripts: {
                    concat: 'jquery.scripts.js',
                    min:    'jquery.scripts.min.js',
                    files: [
                        theme.path.skin.dir + 'js/jquery/scripts/magento-to-bootstrap-navigation.js'
                        ,theme.path.skin.dir + 'js/jquery/scripts/prototype-bootstrap-fix.js'
                        ,theme.path.skin.dir + 'js/jquery/scripts/slideshow.js'
                        ,theme.path.skin.dir + 'js/jquery/scripts/mini-search-form.js'
                    ]
                }
            }
        }
    }

    // Build
    theme.build = {
        dir: theme.path.skin.dir + 'build/',
        images: {
            dir: theme.path.skin.dir + 'images/'
        },
        css: {
            dir: theme.path.skin.dir + 'build/css/'
        },
        js: {
            dir: config.path.build.js.dir + theme.options.package + '/' + theme.options.theme + '/'
        },
        fonts: {
            bootstrap: {
                src:    theme.path.bootstrap.fonts.dir + '**/*',
                dest:   theme.fonts.dir + 'bootstrap/'
            }
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
        },
        minifyCss: {
            keepSpecialComments: 0
        },
        cssBase64: {
            extensionsAllowed:  ['.gif', '.jpg', '.png']
        }
    }

    return theme;
};
