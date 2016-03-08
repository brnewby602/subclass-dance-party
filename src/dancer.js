var makeDancer = function(top, left, timeBetweenSteps, node) {
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this._lineUpFlag = false;
  this.$node = node || $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function() {
  var stepRepeater = function() {
    this.step();
  };

  setTimeout(stepRepeater.bind(this), this._timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.getWidth = function() {
  return this.$node.outerWidth();
};

makeDancer.prototype.getHeight = function() {
  return this.$node.outerHeight();
};

makeDancer.prototype.lineUp = function(top, left) {
  this._lineUpFlag = true;
  this.setPosition(top, left);
};

makeDancer.prototype.goBack = function() {
  this._lineUpFlag = false;
  this.setPosition(this._top, this._left);
};

makeDancer.prototype.setTop = function(top) {
  this._top = top;
};

makeDancer.prototype.setLeft = function(left) {
  this._left = left;
};

makeDancer.prototype.getTop = function() {
  return this._top;
};

makeDancer.prototype.getLeft = function() {
  return this._left;
};