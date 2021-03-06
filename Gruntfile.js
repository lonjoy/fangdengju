module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["static/development/less"]
                },
                files: {
                    "static/production/css/layout.css": "static/development/less/layout.less",
                    "static/production/css/dialog.css": "static/development/less/dialog.less"
                }
            }
        },

        watch: {
            files: 'static/development/less/**/*.less',
            tasks: ['less']
        },

        uglify: {
            jquery: {
                files: {
                    'static/lib/jquery-1.9.1.min.js': 'static/lib/jquery-1.9.1.js'
                }
            },
            bootstrap: {
                files: {
                    'static/bootstrap/js/bootstrap.min.js': 'static/bootstrap/js/bootstrap.js'
                }
            },
            jqueryui: {
                files: {
                    'static/lib/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js': 'static/lib/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('watchless', ['watch']);
    grunt.registerTask('bootstrapmin', ['uglify:bootstrap']);
    grunt.registerTask('jqueryuimin', ['uglify:jqueryui']);
    grunt.registerTask('jquerymin', ['uglify:jquery']);

};









