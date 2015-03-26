'use strict';

module.exports = function(grunt) {
	// Unified Watch Object
	var watchFiles = {
		serverViews: ['app/views/**/*.*'],
		serverJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'app/**/*.js'],
		clientViews: ['public/modules/**/views/**/*.html'],
		clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
		clientCSS: ['public/modules/**/*.css'],
		mochaTests: ['app/tests/**/*.js'],
		clientLess: ['public/modules/**/*.less']
	};

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			serverViews: {
				files: watchFiles.serverViews,
				options: {
					livereload: true
				}
			},
			serverJS: {
				files: watchFiles.serverJS,
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			clientViews: {
				files: watchFiles.clientViews,
				options: {
					livereload: true,
				}
			},
			clientJS: {
				files: watchFiles.clientJS,
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			clientCSS: {
				files: watchFiles.clientCSS,
				tasks: ['csslint'],
				options: {
					livereload: true
				}
			},
            clientLess: {
                files: watchFiles.clientLess,
                tasks: ['less']
            }
		},
		jshint: {
			all: {
				src: watchFiles.clientJS.concat(watchFiles.serverJS),
				options: {
					jshintrc: true
				}
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc',
			},
			all: {
				src: watchFiles.clientCSS
			}
		},
		less: {
		    development: {
		       options: {
		          compress: true,
		          yuicompress: true,
		          optimization: 2
		        },
		        files: [{
		            src: ['assets/less/style.less', 'assets/less/theme.less', 'public/modules/**/*.less'],
		            dest: 'public/modules/core/css/core.css'
		        }]
		    },
		    production: {
		        options: {
                  compress: true,
		          yuicompress: true,
		          optimization: 2
		        },
		        files: [{
		            src: ['assets/less/style.less', 'assets/less/theme.less', 'public/modules/**/*.less'],
		            dest: 'public/modules/core/css/core.css'
		        }]
			}
		},
		imagemin: {
		   dist: {
		      options: {
		        optimizationLevel: 5
		      },
		      files: [{
		         expand: true,
		         cwd: 'public/img',
		         src: ['**/*.{png,jpg,gif}'],
		         dest: 'public/img'
		      }]
		   }
		},
		uglify: {
			production: {
				options: {
					mangle: true,
            		compress: false,
					sourceMap: true
				},
				files: {
					'public/dist/application.min.js': 'public/dist/application.js',
            	    'public/dist/templates.min.js': 'public/dist/templates.js'
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'public/dist/application.min.css': '<%= applicationCSSFiles %>',
					'public/dist/vendor.min.css': '<%= vendorCSSFiles %>'
				}
			}
		},
		concat: {
		    dist: {
		    	  options: {
			      	separator: ';',
		            stripBanners: true
			    },
		    	files: {
		        	'public/js/layout.server.view.1.js': ['assets/js/jquery.js', 'assets/js/camera.min.js', 'assets/js/jquery.equalheights.js', 'assets/js/jquery.mobilemenu.js', 'assets/js/jquery.easing.1.3.js', 'assets/js/jquery-migrate-1.2.1.min.js'],
			        'public/js/layout.server.view.2.js': ['assets/js/TMForm.js', 'assets/js/modal.js', 'public/lib/bootstrap-filestyle/src/bootstrap-filestyle.js'],
			        'public/js/layout.server.view.3.js': ['public/lib/wow/dist/wow.min.js', 'assets/js/wow/device.min.js', 'assets/js/jquery.mobile.customized.min.js'],
			        'public/dist/vendor.min.js': '<%= vendorJavaScriptFiles %>',
			    },
		    },
		  },
		autoprefixer: {
			 // prefix all files
		    multiple_files: {
		      expand: true,
		      flatten: true,
		      src: 'assets/css/*.css', // 'public/modules/**/*.css'
		      dest: 'public/css/' // 'public/modules/**/*.css'
		    },
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					nodeArgs: ['--debug'],
					ext: 'js,html',
					watch: watchFiles.serverViews.concat(watchFiles.serverJS)
				}
			}
		},
		'node-inspector': {
			custom: {
				options: {
					'web-port': 1337,
					'web-host': 'localhost',
					'debug-port': 5858,
					'save-live-edit': true,
					'no-preload': true,
					'stack-trace-limit': 50,
					'hidden': []
				}
			}
		},
		ngAnnotate: {
			production: {
				files: {
					'public/dist/application.js': '<%= applicationJavaScriptFiles %>'
				}
			}
		},
		 ngtemplates: {
            options: {
                htmlmin: {
                    collapseWhitespace: true,
                    removeComments: true
                },
                url: function(url) {
                    return url.replace("public", "assets");
                },
                prefix: "/"
            },
            "meanjs-template": {
                src: "public/modules/**/**.html",
                dest: "public/dist/templates.js"
            }
        },
		concurrent: {
			default: ['nodemon', 'watch'],
			debug: ['nodemon', 'watch', 'node-inspector'],
			options: {
				logConcurrentOutput: true,
				limit: 10
			}
		},
		env: {
			test: {
				NODE_ENV: 'test'
			},
			secure: {
				NODE_ENV: 'secure'
			}
		},
		mochaTest: {
			src: watchFiles.mochaTests,
			options: {
				reporter: 'spec',
				require: 'server.js'
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});

	// Load NPM tasks
	require('load-grunt-tasks')(grunt);
	
	
	// Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	// A Task for loading the configuration object
	grunt.task.registerTask('loadConfig', 'Task that loads the config into a grunt option.', function() {
		var init = require('./config/init')();
		var config = require('./config/config');

		grunt.config.set('applicationJavaScriptFiles', config.assets.js);
		grunt.config.set('applicationCSSFiles', config.assets.css);
	});

	// Default task(s).
	grunt.registerTask('default', ['lint', 'concurrent:default']);

	// Debug task.
	grunt.registerTask('debug', ['lint', 'concurrent:debug']);

	// Secure task(s).
	grunt.registerTask('secure', ['env:secure', 'lint', 'concurrent:default']);

	// Lint task(s).
	grunt.registerTask('lint', ['jshint', 'less', 'csslint']);

	// Build task(s).
	grunt.registerTask('build', ['lint', 'loadConfig', "ngtemplates", 'ngAnnotate', 'uglify', 'cssmin', 'concat']);

	// Test task.
	grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
};