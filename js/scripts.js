

$(function () {
    $('.fullBackground').fullClip({
        images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
        transitionTime: 2000,
        wait: 5000
    });
});
$(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});
// new WOW().init();
