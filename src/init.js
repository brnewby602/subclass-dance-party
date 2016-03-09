$(document).ready(function() {
  window.dancers = [];
  window.storage = {};
  window.windowWidth = $(document).width();
  window.windowHeight = $(document).height();

  window.intersection = function(dancers, currentDancer) {
    dancers.forEach(function(dancer) {
      dancer.dance();
    });
    currentDancer.dance();
  };



  window.appendLocation = function(dancer, oldTop, oldLeft) {
    //find center poits for top and left
    var top = dancer.getTop() + (dancer.getHeight() / 2);
    var left = dancer.getLeft() + (dancer.getWidth() / 2);
    oldTop = oldTop + (dancer.getHeight() / 2);
    oldLeft = oldLeft + (dancer.getWidth() / 2);
    //console.dir(window.storage)

    // top = 74.25
    // left = 225.1
    // round center values to nearest 120px to reduce number of storage points
    var topMod120 = Math.floor(Math.round( top / 120) * 120);
    var leftMod120 = Math.floor(Math.round( left / 120) * 120);
    
    // if dancer is moving (i.e. we get an oldTop and oldLeft)
    if (oldLeft !== undefined) {
      //oldTop and oldLeft exist only for moving Dancers so that we may remove
      //them from their old positions within storage
      oldTop = Math.floor(Math.round( oldTop / 120) * 120);
      oldLeft = Math.floor(Math.round( oldLeft / 120) * 120);


      //create key for old and new position
      var oldKey = oldTop + '|' + oldLeft; 
      window.storage[oldKey] = window.storage[oldKey] || []; 

      // remove from storage at the old key
      if (window.storage[oldKey].includes(dancer)) {
        window.storage[oldKey].splice(window.storage[oldKey].indexOf(dancer), 1);  
      }
    }
    
    var key = topMod120 + '|' + leftMod120;
    window.storage[key] = window.storage[key] || []; 

    if (window.storage[key].length > 0) {
      // do something if intersection
      intersection(window.storage[key], dancer);
    } 

    window.storage[key].push(dancer);
  };

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

    $(dancer.$node).on('mouseover', function() {
      dancer.dance();
    });

    window.dancers.push(dancer);

    // don't want to use move method called twice (window.append is invoked)
    if (!(dancer instanceof makeRotatingDancer)) {
      appendLocation(dancer);
    } 

    if (dancer instanceof makeBlinkyDancer) { 
      $(dancer.$node).on('mouseout', function() {

        dancer.dance();
        dancer._dontBlink = false;
      });          
    }

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

      //hide the 3 dancer buttons

      $('.addDancerButton').hide();
      $('.addBounceButton').hide();
      $('.addRotateButton').hide();

      //change text of lineUpButton to "Scatter"
      $(this).text("Scatter");

    } else {
      window.dancers.forEach(function(dancer) {
        dancer.goBack();
      });

      // show the 3 dancer buttons
      $('.addDancerButton').show();
      $('.addBounceButton').show();
      $('.addRotateButton').show();

      // change text back to "Line em up"
      $(this).text("Line em up");
    }
    willLineUp = !willLineUp;
  });
});

