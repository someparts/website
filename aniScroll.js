window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function(callback) {
           window.setTimeout(callback, 1000 / 240);
         };
})();

(function textSlide(){
  const speed = 2000;
  let slideWidth = $('.slideItem:first-child').outerWidth();
  $(".slideContainer").animate({marginLeft: -slideWidth}, speed, 'linear', function(){
    $(this).css({marginLeft: 0}).find("li:last").after($(this).find("li:first"));
    });
    window.requestAnimationFrame(textSlide);
})();   