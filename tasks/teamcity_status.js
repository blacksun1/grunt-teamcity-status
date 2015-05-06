/*
 * grunt-teamcity-status
 * https://github.com/blacksun1/grunt-teamcity-status
 *
 * Copyright (c) 2015 Simon Bruce
 * Licensed under the MIT license.
 */

'use strict';

var reporter = require('./teamcity-reporter.js');

module.exports = function (grunt, reporter) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('teamcity_status',
    'Module to publish information to Teamcity about the application being built.', function () {
      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
        punctuation: '.',
        separator: ', '
      });

      // Iterate over all specified file groups.
      this.files.forEach(function (f) {
        // Concat specified files.
        var src = f.src.filter(function (filepath) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          }

          return true;
        }).map(function (filepath) {
          // Read file source.
          return grunt.file.read(filepath);
        }).join(grunt.util.normalizelf(options.separator));

        // Handle options.
        src += options.punctuation;

        // Write the destination file.
        grunt.file.write(f.dest, src);

        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created.');
      });
    });
};
