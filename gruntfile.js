module.exports = function(grunt) {
  grunt.initConfig({
    bootlint: {
      options: {
        relaxerror: [],
        showallerrors: false,
        stoponerror: false,
        stoponwarning: false
      },
      files: ['*.html']
    },
    validation: {
      options: {
        stoponerror: true,
        failhard: true
      },
      files: {
        src: ['*.html']
      }
    },
    watch: {
      files: ['*.html'],
      tasks: ['bootlint', 'validation']
    }
  });
  grunt.loadNpmTasks('grunt-bootlint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-w3c-html-validation');

  grunt.registerTask('default', ['bootlint','validation','watch'])
};
