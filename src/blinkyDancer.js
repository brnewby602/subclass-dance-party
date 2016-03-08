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

  var randV = (Math.random() - 0.5) * 100;
  var randH = (Math.random() - 0.5) * 100;

  // if number is greater than 0 && number is less than boundary
    // do this
  if ((randV + this._top >= topBound) && (randV + this._top <= bottomBound)) {
    this._top += randV;
  } 

  if ((randH + this._left >= leftBound) && (randH + this._left <= rightBound)) {
    this._left += randH;
  }
  this.setPosition(this._top, this._left);
};