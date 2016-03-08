var makeBounceDancer = function(top, left, timeBetweenSteps) {
  var $node = $('<span class="bouncer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, $node);
};

makeBounceDancer.prototype = Object.create(makeDancer.prototype);
makeBounceDancer.prototype.constructor = makeBounceDancer;

makeBounceDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
  
  // console.dir(this.$node);
  // console.log("Top = " + this._top);
  // console.log("Left = " + this._left);
  // console.log(this.$node[0].outerHTML);
  // this.$node.toggle();
    // this.$node.toggle( "bounce", { times: 10 }, "slow" );
    // this.$node.slideToggle();
  // console.log("AFTER TOGGLE: " + this.$node[0].outerHTML);
  // this.$node.bounce();
  // this.$node.toggle();
  //this.$node.toggle("bounce", { times: 1 }, "slow");
};