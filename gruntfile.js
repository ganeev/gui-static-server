/**
 * Created by kurdt on 6/28/14.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compress: {
            main: {
                options: {
                    archive: 'application.nw',
                    mode: 'zip'
                },
                files: [
                    {expand: true, cwd: 'application/www/', src: ['index.html', 'package.json'], dest: ''}
                ]
            }
        },
        run: {
            options: {
                wait: true
            },
            application: {
                cmd: './application/nw',
                args: [
                    './application.nw'
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-run');

    // Default task(s).
    grunt.registerTask('Refresh', ['compress', 'run']);
    grunt.registerTask('zip', ['compress']);
    grunt.registerTask('Run', ['run']);
};
