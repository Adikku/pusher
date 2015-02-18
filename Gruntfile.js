module.exports =  function(grunt){
	grunt.initConfig ({
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target file.css: source file.less
					"src/css/pusher-left.css" : "src/less/left-folded/left-folded.less",
					"src/css/pusher-right.css" : "src/less/right-folded/right-folded.less"
				}
			}
		},
		watch: {
			files: ['**/*.less'],
			tasks: ['less'],
			options: {
				nospawn: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};