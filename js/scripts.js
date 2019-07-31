

$(function () {
    $('.fullBackground').fullClip({
        images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
        transitionTime: 2000,
        wait: 5000
    });
});
$(".lunch").hide();
$(".supper").hide();
$(".drinks").hide();
$(document).ready(function(){
  $("#lunchit").click(function(event){
    $(".drinks").hide();   
    $(".lunch").fadeTo('slow',1).slideDown('slow');
    $(".breakfast").hide();
    $(".supper").hide();
  });

  $("#break").click(function(event){  
    $(".lunch").fadeTo('slow',0).hide();
    $(".breakfast").fadeTo('slow',1).slideDown('slow');
    $(".supper").hide();
    $(".drinks").hide(); 
  });
  $("#supperit").click(function(event){
    $(".breakfast").hide(); 
    $(".drinks").hide();  
    $(".lunch").fadeTo('slow',0).hide();
    $(".supper").fadeTo('slow',1).slideDown('slow');
  });
  $("#drinkit").click(function(event){
    $(".breakfast").hide();   
    $(".lunch").hide();
    $(".supper").hide();
    $(".drinks").fadeTo('slow',1).slideDown('slow');
  });

});

