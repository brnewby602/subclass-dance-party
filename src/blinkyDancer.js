var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this._oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this._oldStep();
  this.$node.toggle();
};