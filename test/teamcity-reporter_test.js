/*globals test*/
'use strict';

var Reporter = require('../tasks/teamcity-reporter.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.teamcity_status = {
  setUp: function (done) {
    done();
  },

  willSetParameter: function (test) {
    test.expect(1);

    // Arrange
    var reporter,
      actual;
    reporter = new Reporter(function (message) { actual = message; });

    // Act
    reporter.setParamater('xxx', 'yyy');

    // Assert
    test.equal(actual, '##teamcity[setParameter name=\'xxx\' value=\'yyy\']');
    test.done();
  }
};
