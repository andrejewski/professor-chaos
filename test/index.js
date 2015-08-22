
var assert = require('assert');
var pc = require('../');

describe('professor-chaos', function() {

  describe('ChaosError', function() {
    it('should be an instance of Error', function() {
      assert.ok((new pc.ChaosError()) instanceof Error);
    });
    it('should be named \"ChaosError\"', function() {
      var error = new pc.ChaosError();
      assert.equal(error.name, 'ChaosError');
    });
  });

  describe('#timer([min ,]max) timerId', function() {

  });

  describe('#fault([message ,][callback])) void', function() {

  });

});

