var makeBounceDancer = function(top, left, timeBetweenSteps) {

  console.log("Top = " + top);
  console.log("Left = " + left);

  var $node = $('<span class="dancer bouncer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, $node);
};

makeBounceDancer.prototype = Object.create(makeDancer.prototype);
makeBounceDancer.prototype.constructor = makeBounceDancer;

makeBounceDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  //this.$node.toggle("bounce", { times: 1 }, "slow");
};