var makeRotatingDancer = function(top, left, timeBetweenSteps, node) {
  var $node = $('<span class="rotater"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, $node);
};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  /* ROTATE */
 // this.$node.toggle();
};