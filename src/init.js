$(window).load(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
      Math.max(Math.random() * 5000, 1000)
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.dancerBehavior').on('click', function(event) {
 
    var dancerBehavior = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of behavior we want
    var dancerBehaviorFunction = window.behaviors[dancerBehavior](window.dancers);

  });


  // $('body').on('click', '.dancer.canadian', function() {
  //   var clicks = true;
  //   var $dancer = $(this);
  //   console.log($(this));
  //   if (clicks) {
  //     $('body').on('mousemove', function(event) {
  //       // this.setPosition(event.pageY, event.pageX);
  //       //console.log($(this));
  //       $dancer.animate({
  //         top: event.pageY - 136,
  //         left: event.pageX - 75
  //       }, 10);
  //     });
  //     clicks = false;
  //   } else {
  //     //console.log('TURN OFF');
  //     $('body').off('mousemove');
  //     clicks = true;
  //   }

  // });

});