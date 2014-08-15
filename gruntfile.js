var path = require('path');

module.exports = function(grunt) {

  var config = {
    client: 'app/client',
    server: 'app/server',
    dist: 'dist'
  };

//  console.log('<%= config.server %>');
//  console.log('<%= pkg.name %>');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['app/server/scripts/**/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app/server/scripts/**/*.js',
        dest: 'dist/scripts/main.min.js'
      }
    },
    sass: {
      compile:{
        files: {
          'dist/styles/main.css': 'app/client/styles/main.scss'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'app/server/views',
        src: '**/*.hbs',
        dest: 'dist/views/'
      }
    }
  });

// load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

// register default tasks
  grunt.registerTask('default', ['uglify', 'jshint', 'copy', 'sass']);
}


