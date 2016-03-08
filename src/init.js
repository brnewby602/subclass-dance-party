$(document).ready(function() {
  window.dancers = [];
  window.windowWidth = $(document).width();
  window.windowHeight = $(document).height();

  var addDancer = function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  };

  $('.addDancerButton').on('click', addDancer);
  $('.addBounceButton').on('click', addDancer);
  $('.addRotateButton').on('click', addDancer);

  var willLineUp = true;
  $('.addLineUpButton').on('click', function(event) {
    if (willLineUp) {
      var spacing = 0;
      var position = 0;
      var windowWidth = $(document).width() - 60;    // 2000
      spacing = windowWidth / (window.dancers.length + 1); // 1000
      position = spacing;
      window.dancers.forEach(function(dancer) {
        dancer.lineUp(100, position);
        position += spacing;
      });
    } else {
      window.dancers.forEach(function(dancer) {
        dancer.goBack();
      });
    }
    willLineUp = !willLineUp
  });
});

