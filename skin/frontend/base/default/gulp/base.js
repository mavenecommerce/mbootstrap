//
// Default Magento Base theme resources, dependies and tasks
// --------------------------------------------------
module.exports = function(config) {

    return {
        source: {
            css: {},
            js: {
                global: {
                    files: [
                        config.path.js.dir + 'prototype/prototype.js'
                        ,config.path.js.dir + 'lib/ccard.js'
                        ,config.path.js.dir + 'prototype/validation.js'
                        ,config.path.js.dir + 'scriptaculous/builder.js'
                        ,config.path.js.dir + 'scriptaculous/effects.js'
                        ,config.path.js.dir + 'scriptaculous/dragdrop.js'
                        ,config.path.js.dir + 'scriptaculous/controls.js'
                        ,config.path.js.dir + 'scriptaculous/slider.js'
                        ,config.path.js.dir + 'varien/js.js'
                        ,config.path.js.dir + 'varien/form.js'
                        ,config.path.js.dir + 'varien/menu.js'
                        ,config.path.js.dir + 'mage/translate.js'
                        ,config.path.js.dir + 'mage/cookies.js'
                        ,config.path.js.dir + 'mage/directpost.js'
                        ,config.path.js.dir + 'mage/captcha.js'
                        ,config.path.js.dir + 'mage/centinel.js'
                        ,config.path.js.dir + 'varien/weee.js'
                    ]
                },

                catalog: {
                    files: [
                        config.path.js.dir + 'varien/product.js'
                        ,config.path.js.dir + 'scriptaculous/scriptaculous.js'
                        ,config.path.js.dir + 'calendar/calendar.js'
                        ,config.path.js.dir + 'calendar/calendar-setup.js'
                        ,config.path.skin.dir + 'base/default/js/msrp.js'
                    ]
                },

                product: {
                    simple:         {
                        files: [
                            config.path.js.dir + 'varien/product.js'
                            ,config.path.js.dir + 'calendar/calendar.js'
                            ,config.path.js.dir + 'calendar/calendar-setup.js'
                        ]
                    },
                    configurable:   {
                        files: [
                            config.path.js.dir + 'varien/configurable.js'
                        ]
                    },
                    grouped:        {
                        files: []
                    },
                    virtual:        {
                        files: []
                    },
                    bundle:         {
                        files: [
                            config.path.skin.dir + 'base/default/js/bundle.js'
                        ]
                    },
                    gift: {
                        files: []
                    }
                },

                cart: {
                    files: []
                },

                checkout: {
                    opc: {
                        files: [
                            config.path.js.dir + 'scriptaculous/scriptaculous.js'
                            ,config.path.js.dir + 'varien/accordion.js'
                            ,config.path.skin.dir + 'base/default/js/opcheckout.js'
                        ]
                    },
                    msc: {
                        files: []
                    }
                }
            }
        },

        build: {
            css: {},
            js: {
                dir: config.path.build.js.dir + 'base/default/'
            }
        },

        plugins: {
            uglify: {
                mangle: false
            }
        }
    }
};
