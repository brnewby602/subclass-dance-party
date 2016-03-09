var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  var $node = $('<span class="bouncer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, $node);
};

makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;

makeBouncingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};

makeBouncingDancer.prototype.dance = function() {
  var styleSettings = {
    top: this._top,
    left: this._left //, 
  };

  this.$node.toggleClass('bounce');    //need to create .bounce class

};