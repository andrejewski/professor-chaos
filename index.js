
var quote = [
  "Professor Chaos: We have crashed the program, rendering it useless.",
  "General Disarray: Simpsons did it!"
].join('\n');

function ChaosError(msg) {
  this.name = 'ChaosError';
  this.message = msg || quote;
}

ChaosError.prototype = Error.prototype;
ChaosError.constructor = ChaosError;

function random(min, max) {
  if(!max) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chaos(msg, next) {
  if(typeof msg === 'function') {
    next = msg;
    msg = null;
  } else if (msg === void 0 || !next) {
    next = function(error) { throw error; };
  }
  var error = new ChaosError(msg);
  next(error);
}

function timer(min, max) {
  return setTimeout(chaos, random(min, max));
}

function fault(min, max) {
  var limit = random(min, max);
  var count = 0;

  return {
    hasError: function() {
      return (count++) > limit;
    },
    error: function(msg, next) {
      if(count > limit) {
        chaos(msg, next);
        limit = random(min, max);
        count = 0;
      }
    }
  };
}

module.exports = {
  ChaosError: ChaosError,
  timer: timer,
  fault: fault
};

