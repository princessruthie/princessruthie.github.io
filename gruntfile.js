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
  /*shallow rabbit hole:
  grunt tasks can be named whatever, including 'default'
  registerTask task an optional middle parameter-- a description array
  trailing commas are helpful in objects and array because they make adding on easier
  // grunt.registerTask('develop', ['this is for dev',] ,['concat',]);
  */
};  //wrapper function
