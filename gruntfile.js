module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['assets/less']
                },
            files: {
                'dist/css/style.css': 'assets/less/style.less'
                }
            }
        },
        // ...

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'assets/images/',
                src: ['*.{png,jpg,gif}'],
                dest: 'dist/images/'
        }]
    }
},

        uglify: {
                options: {
                    compress: true,
                    mangle: true
                },
                target: {
                    files: {
                        'dist/js/script.min.js': ['assets/js/script.js']
                    }
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'imagemin', 'uglify']);
};
