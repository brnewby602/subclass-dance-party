describe('rotatingDancer', function() {
  var rotatingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotatingDancer = new makeRotatingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotatingDancer.$node).to.be.an.instanceof(jQuery);
  });  

  //toggle needs to be changed to a bounce method
  it('should have a step function that makes its node bounce', function() {
    sinon.spy(rotatingDancer.$node, 'toggle');
    rotatingDancer.step();
    expect(rotatingDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotatingDancer, 'step');
      expect(rotatingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(rotatingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.step.callCount).to.be.equal(2);
    });
  });
});