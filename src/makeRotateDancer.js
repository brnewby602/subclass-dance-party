var makeRotateDancer = function(top, left, timeBetweenSteps, node) {
  var $node = $('<span class="bouncer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, $node);
};

makeRotateDancer.prototype = Object.create(makeDancer.prototype);
makeRotateDancer.prototype.constructor = makeRotateDancer;

makeRotateDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  /* ROTATE */
  this.$node.toggle();
};