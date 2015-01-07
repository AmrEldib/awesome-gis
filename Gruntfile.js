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
                    namespace: "awesomeTemplates"
                },
                files: {
                    "templates/itemTemplate.hbs.js": ["templates/itemTemplate.handlebars"],
                    "templates/navTemplate.hbs.js": ["templates/navTemplate.handlebars"]
                }
            }
        },
        copy: {
            main: {
                files: [
                  {
                      src: ['node_modules/jquery/dist/jquery.min.js'],
                      dest: 'js/jquery/jquery.min.js'
                  },
                  {
                      src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
                      dest: 'js/bootstrap/bootstrap.min.js'
                  },
                  {
                      src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
                      dest: 'css/bootstrap/bootstrap.min.css'
                  },
                  {
                      src: ['node_modules/handlebars/dist/handlebars.runtime.min.js'],
                      dest: 'js/handlebars/handlebars.runtime.min.js'
                  }
                ],
            },
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Register task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'handlebars', 'copy']);
    grunt.registerTask('watch', ['watch']);
};