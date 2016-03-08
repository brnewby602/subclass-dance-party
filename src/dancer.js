var makeDancer = function(top, left, timeBetweenSteps, node) {
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = node || $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
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