module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {"presets": ['es2015', 'react']}]
          ],
          extensions: ['jsx', 'js'],
          watch: true
        },
        files: {
          'www/js/build.js': ['src/js/**/*.jsx', 'src/js/**/*.js']
        }
      }
    },
    express: {
      options: {
        port: 3030
      },
      dev: {
        options: {
          script: 'nodeapp.js'  
        }
      }
    },
    watch: {
      express: {
        files: ['www/**/*.js'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('server', ['build', 'express:dev', 'watch'])
}