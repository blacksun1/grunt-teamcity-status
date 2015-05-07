/*
 * grunt-teamcity-status
 * https://github.com/blacksun1/grunt-teamcity-status
 *
 * Copyright (c) 2015 Simon Bruce
 * Licensed under the MIT license.
 */

'use strict';

var Reporter = require('../lib/teamcity-reporter.js'),
  fs = require('fs');

module.exports = function (grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('teamcity_status',
    'Module to publish information to Teamcity about the application being built.', function () {
      var reporter = new Reporter(),
        packageJson = fs.readFileSync('./package.json'),
        version = JSON.parse(packageJson).version;

      reporter.setParamater('APPLICATION_SEMVER', version);
    });
};
