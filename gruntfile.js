module.exports = function(grunt) {
  grunt.initConfig({
    // Configurable paths


    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src: 'src/<%= pkg.name %>.js',
        dst: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // load the plugin that supplies uglify task
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // register default task
  grunt.registerTask('default', ['uglify']);


};

