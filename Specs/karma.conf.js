// Karma configuration
// Generated on Fri Oct 09 2015 17:21:55 GMT+0200 (Közép-európai nyári idő )

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
		'D:/bme/diploma/Scripts/angular.js',
		'D:/bme/diploma/Scripts/angular-mocks.js',
		'D:/bme/diploma/Scripts/angular-route.js',
		'D:/bme/diploma/Scripts/angular-resource.js',
		'D:/bme/diploma/Scripts/angular-timer-all.min.js',
		'D:/bme/diploma/Scripts/angular-*.js',
		'D:/bme/diploma/Scripts/angular-ui/*.js',
		'D:/bme/diploma/App/app.js',
		'D:/bme/diploma/Services/**.js',
				
		'D:/bme/diploma/Model/**.js',
		'D:/bme/diploma/Controllers/**.js',
		'D:/bme/diploma/Specs/controllerSpecs.js',
		
		
		],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'xml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
