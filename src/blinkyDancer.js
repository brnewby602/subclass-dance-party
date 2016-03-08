var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this._oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  if (!this._lineUpFlag) {
    this.move();
  }
  // this.$node.toggle();
};

makeBlinkyDancer.prototype.move = function() {
  var bottomBound = window.windowHeight - 60;
  var rightBound = window.windowWidth - 60;
  var topBound = 0;
  var leftBound = 0;

  var rand = (Math.random() - 0.5) * 100;

  if ((rand + this._top >= topBound) && (rand + this._top <= bottomBound)) {
    this._top += rand;
  } 

  if ((rand + this._left >= leftBound) && (rand + this._left <= bottomBound)) {
    this._left += rand;
  }

  this.setPosition(this._top, this._left);
};