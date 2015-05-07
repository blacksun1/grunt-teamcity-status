/*
 * grunt-teamcity-status
 * https://github.com/blacksun1/grunt-teamcity-status
 *
 * Copyright (c) 2015 Simon Bruce
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({});

  // grunt.registerTask('teamcity_status', function () {
  //   var Reporter = require('./tasks/teamcity-reporter.js'),
  //     reporter = new Reporter(),
  //     fs = require('fs'),
  //     packageJson = fs.readFileSync('./package.json'),
  //     version = JSON.parse(packageJson).version;

  //   reporter.setParamater('APPLICATION_SEMVER', version);
  // });
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['teamcity_status']);
};
