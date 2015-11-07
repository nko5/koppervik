/*jshint node:true*/

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			dev: {
				dest: 'public',
				js_dest: 'public/lib/',
				options: {
					keepExpandedHierarchy: false
				}
			}
		},
		jshint: {
			all: ["Gruntfile.js", "app.js", "public/js/koppervik.js"]
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('lint', ['jshint']);
};
