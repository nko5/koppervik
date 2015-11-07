/*jshint node:true*/

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			dev: {
				dest: 'public/'
			}
		},
		jshint: {
			all: ["Gruntfile.js", "app.js"]
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('lint', ['jshint']);
};
