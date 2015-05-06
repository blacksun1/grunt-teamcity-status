'use strict';

var util = require('util');

function Reporter(logger) {
  if (logger === undefined) {
    logger = this.defaultLogger;
  }
  this.logger = logger;
  return;
}

Reporter.prototype.defaultLogger = function (message) {
  console.log(message);
};

Reporter.prototype.setParamater = function (paramName, paramValue) {
  this.logger(util.format('##teamcity[setParameter name=\'%s\' value=\'%s\']', paramName, paramValue));
};

module.exports = Reporter;
