module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
      files : {
        src: ['package.json', 'README.md'],
        dest: 'conkitty.md',
      }
    }

  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('develop', ['this is for dev',] ,['concat',]);
};  //wrapper function
