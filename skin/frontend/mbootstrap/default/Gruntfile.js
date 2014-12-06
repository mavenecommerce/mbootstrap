module.exports = function(grunt) {
    grunt.initConfig({

        // LESS to CSS
        less: {
            compileLess: {
                options: {
                    cleancss: false,
                    report: 'min'
                },
                files: {
                    // target.css file: source.less file
                    "css/mbootstrap.css": "less/mbootstrap.less"
                    ,"css/mbootstrap-ie8.css": "less/mbootstrap-ie8.less"
                    ,"css/mbootstrap-ie9.css": "less/mbootstrap-ie9.less"
                }
            },
            compileCss: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    "css/mbootstrap.min.css": "css/mbootstrap.css"
                    ,"css/mbootstrap-ie8.min.css": "css/mbootstrap-ie8.css"
                    ,"css/mbootstrap-ie9.min.css": "css/mbootstrap-ie9.css"
                }
            }
        }

        , autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
            },
            source: {
                options: {
                    map: true
                },
                src: 'css/mbootstrap.css'
            }
        }

        , csscomb: {
            options: {
                config: 'less/.csscomb.json'
            },
            dist: {
                expand: true,
                cwd: 'css/',
                src: ['mbootstrap*.css', '!*.min.css', '!*ie*'],
                dest: 'css/'
            }
        }


        // JS
        , concat: {
            concatJS: {
                src: [
                    // jQuery Theme scripts
                    'js/jquery/scripts/magento-to-bootstrap-navigation.js'
                ],
                dest: 'js/dist/scripts.js'
            }
        }

        , uglify: {
            options: {
                report: 'gzip'
            },
            compileJS: {
                src: 'js/dist/scripts.js',
                dest: 'js/dist/scripts.min.js'
            }
        }


        // Watch
        , watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['dist-css'],
                options: {
                    nospawn: true
                }
            }
            ,js: {
                files: ["js/jquery/scripts/*.js"],
                tasks: ['dist-js'],
                options: {
                    nospawn: true
                }
            }
        }
    });


    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // JS distribution task.
    grunt.registerTask('dist-js', ['concat', 'uglify']);

    // CSS distribution task.
    grunt.registerTask('less-compile', ['less:compileLess']);
    grunt.registerTask('dist-css', ['less-compile', 'autoprefixer', 'csscomb', 'less:compileCss']);

    // Full distribution task.
    grunt.registerTask('dist', ['dist-css', 'dist-js']);

    // Default distribution task.
    grunt.registerTask('default', ['dist']);
};
