$(document).ready(function(){
  $('div').mouseenter(function(){
    $('div').fadeTo('slow', 1);
  });
  $('div').mouseleave(function(){
    $('div').fadeTo('slow', 0.5);
  });
});



