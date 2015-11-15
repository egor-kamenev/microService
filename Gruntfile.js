/**
 * Created by nafigator on 15.11.2015.
 */

module.exports = function (grunt) {
  grunt.initConfig({
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'path',
              replacement: 'http://localhost:8080'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./scripts/data/dev/cars.json'],
            dest: './scripts/data/'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['replace:dist']);

};