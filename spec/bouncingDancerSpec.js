describe('bouncingDancer', function() {
  var bouncingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncingDancer = new makeBouncingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncingDancer.$node).to.be.an.instanceof(jQuery);
  });  

  //toggle needs to be changed to a bounce method
  it('should have a step function that makes its node bounce', function() {
    sinon.spy(bouncingDancer.$node, 'toggle');
    bouncingDancer.step();
    expect(bouncingDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncingDancer, 'step');
      expect(bouncingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(bouncingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncingDancer.step.callCount).to.be.equal(2);
    });
  });
});