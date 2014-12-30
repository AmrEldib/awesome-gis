module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['js/*.js','css/*.css', 'templates/*.handlebars'],
                tasks: ['default'],
                options: {
                    debounceDelay: 250,
                    spawn: false
                },
            },
            configFiles: {
                files: ['Gruntfile.js'], 
                options: {
                    reload: true
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/awesomeGis.min.js': ['js/awesomeGis.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/awesomeGis.min.css': ['css/awesomeGis.css']
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "JST"
                },
                files: {
                    "templates/itemTemplate.hbs.js": "templates/itemTemplate.handlebars",
                    "templates/navTemplate.hbs.js": ["templates/navTemplate.handlebars"]
                }
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Register task(s).
    grunt.registerTask('default', ['watch', 'uglify', 'cssmin', 'handlebars']);
};