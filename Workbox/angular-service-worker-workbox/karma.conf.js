module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false 
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      fixWebpackSourcePaths: true,
      dir: path.join(dist, 'coverage'),


    },
    angularCli: {
      environment: 'prod'
    },
    reporters: ['progress', 'junit','coverage-istanbul','kjhtml'],
    junitReporter: {
      outputDir: '', 
      outputFile: undefined, 
      suite: '', 
      useBrowserName: true, 
      nameFormatter: undefined,
      classNameFormatter: undefined, 
      properties: {} 
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
