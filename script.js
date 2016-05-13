var main = function() {
  $('.more-btn').click(function(){
    $('.more-menu').toggle();
  });
  
  $('.share').click(function(){
    $('.share-menu').toggle();
  });
  
  $('.notification').click(function(){
    $(this).toggleClass('active');//when targeting a class for for a metod no need for period
  });

};

$(document).ready(main);