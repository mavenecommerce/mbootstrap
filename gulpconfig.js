//
// Config settings
// --------------------------------------------------
module.exports = function(root){
    return {
        app: {
            dir: root + 'app/design/frontend/'
        },
        skin: {
            dir: root + 'skin/frontend/'
        },
        js: {
            dir: root + 'js/'
        },
        build: {
            css: {},
            js: {
                dir: root + 'js/build/',

                global: {
                    concat: 'magento.js',
                    min:    'magento.min.js'
                },
                catalog: {
                    concat: 'catalog.js',
                    min:    'catalog.min.js'
                },
                product: {
                    simple:         {
                        concat: 'product_simple.js',
                        min:    'product_simple.min.js'
                    },
                    configurable:   {
                        concat: 'product_configurable.js',
                        min:    'product_configurable.min.js'
                    },
                    grouped:        {
                        concat: 'product_grouped.js',
                        min:    'product_grouped.min.js'
                    },
                    virtual:        {
                        concat: 'product_virtual.js',
                        min:    'product_virtual.min.js'
                    },
                    bundle:         {
                        concat: 'product_bundle.js',
                        min:    'product_bundle.min.js'
                    }
                },
                cart: {
                    concat: 'cart.js',
                    min:    'cart.min.js'
                },
                checkout: {
                    opc: {
                        concat: 'checkout_opc.js',
                        min:    'checkout_opc.min.js'
                    },
                    msc: {
                        concat: 'checkout_msc.js',
                        min:    'checkout_msc.min.js'
                    }
                }
            }
        }
    };
};
