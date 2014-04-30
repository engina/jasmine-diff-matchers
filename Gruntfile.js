'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['src/**/*.js', 'test/**/*.js'],
        tasks: ['build'],
        options: {
          nospawn: true
        }
      }
    },

    concat: {
      dist: {
        files: [{
          src: [
            'src/wrappers/header.js',
            'src/*.js',
            'src/wrappers/footer.js'
          ],
          dest: 'dist/jasmine-diff-matchers.js'
        }]
      }
    },


    jshint: {
      beforeconcat: ['src/**/*.js'],
      afterconcat: ['dist/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('build', ['jshint:beforeconcat', 'concat', 'jshint:afterconcat']);
};