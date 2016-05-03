/*
 * grunt-teamcity-status
 * https://github.com/blacksun1/grunt-teamcity-status
 *
 * Copyright (c) 2015 Simon Bruce
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    "jshint": {
      "all": [
        "Gruntfile.js",
        "tasks/*.js",
        "<%= nodeunit.tests %>"
      ],
      "options": {
        "jshintrc": ".jshintrc"
      }
    },

    // Unit tests.
    "nodeunit": {
      "options": {
        "reporter": "default"
      },
      "tests": ["test/*_test.js"]
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks("tasks");

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  grunt.registerTask("default", ["teamcity_status"]);
  grunt.registerTask("test", ["nodeunit"]);
};
