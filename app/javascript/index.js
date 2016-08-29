var $ = require('jquery');
// var _ = require("lodash");
require("style!css!../css/dice.css");


var array = [1, 2, 3, 4, 5, 6];
// var number = _.shuffle(array);


module.exports =
 $("#button").on('click', function(e){
  array.map(function(n){

    $("#greeting").html("The dice has been rolled, the number you got is: " + n);
      });

  var again = $(this).html("Play again?");

  $(again).on('click', function(x){

    $(this).html('Roll Dice!');

  })

  // try for lodash - _.shuffle(n)?

//   $(this).html("Play again?").on('click', function(playagain){
//
// $(this).html('Roll dice');!
//
//   })
});
