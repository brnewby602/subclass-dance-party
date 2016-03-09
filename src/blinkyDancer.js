var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this._oldStep = makeDancer.prototype.step;
  var $node = $('<span class="blinky"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, $node);
  this._blinkCount = 0;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this._blinkCount > 0) {
    this._blinkCount--;
    this.$node.toggle();
  } else {
    this.$node.show();
  }
};

makeBlinkyDancer.prototype.dance = function() {
  var styleSettings = {
    top: this._top,
    left: this._left //, 
  };
  
  //set counter for number of blinks
  this._blinkCount = 6;

 // this.$node.toggleClass('grow');  only want to grow on mouseover
};

makeBlinkyDancer.prototype.lineUp = function(top, left) {
  this._blinkCount = 0;
  makeDancer.prototype.lineUp.call(this, top, left);
};