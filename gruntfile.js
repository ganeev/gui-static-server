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
                    archive: 'package.nw',
                    mode: 'zip'
                },
                files: [
                    {expand: true, cwd: 'application/www/', src: ['*.*'], dest: ''}
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
                    './package.nw'
                ]
            }
        },
        nodewebkit: {
            options: {
                platforms: ['linux64', 'win32'],
                downloadUrl: 'http://dl.nwjs.io/',
                version: '0.12.0-alpha1',
                forceDownload: true,
                buildDir: './webkitbuilds' // Where the build version of my node-webkit app is saved
            },
            src: ['./application/www/*'] // Your node-webkit app
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-node-webkit-builder');

    // Default task(s).
    grunt.registerTask('Refresh', ['compress', 'run']);
    grunt.registerTask('zip', ['compress']);
    grunt.registerTask('Run', ['run']);
    grunt.registerTask('Build', ['nodewebkit']);

};
