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
					keepExpandedHierarchy: false,
					packageSpecific: {
						phaser: {
							files: [
								"build/phaser.min.js",
								"build/phaser.js"
							]
						}
					}
				}
			}
		},
		uglify: {
			main: {
				files: {
					'public/js/koppervik.min.js': ['public/js/koppervik.js']
				}
			}
		},
		jshint: {
			all: ["Gruntfile.js", "app.js", "public/js/koppervik.js"]
		}
	});

	grunt.registerTask('default', ['jshint', 'bower', 'uglify']);
	grunt.registerTask('lint', ['jshint']);
};
