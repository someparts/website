// highlight cells
$("td").mouseenter(function(){
  $(this).addClass("highlight");
  $(this).siblings().not(".header-column").addClass("highlight");
  $(this).closest("table").find("td:nth-child(" + ($(this).index() + 1) + ")").addClass("highlight");
});
$("td").mouseleave(function(){
  $(this).removeClass("highlight");
  $(this).siblings().not(".header-column").removeClass("highlight");
  $(this).closest("table").find("td:nth-child(" + ($(this).index() + 1) + ")").removeClass("highlight");
});

// change banner style on column hover
// styles with a black background also change the background of the <ul> element to cover gaps before they're covered in the animation frame
$(".column-a").hover(function(){
  $(".slideItem").attr('class', "slideItem style-a");
  $(".slideContainer").css("background-color", "black");
}, function(){
  $(".slideItem").attr('class', "slideItem");
  $(".slideContainer").css("background-color", "white");
})
$(".column-b").hover(function(){
  $(".slideItem").attr('class', "slideItem style-b");
}, function(){
  $(".slideItem").attr('class', "slideItem");
})
$(".column-c").hover(function(){
  $(".slideItem").attr('class', "slideItem style-c");
  $(".slideContainer").css("background-color", "black");
}, function(){
  $(".slideItem").attr('class', "slideItem");
  $(".slideContainer").css("background-color", "white");
})
$(".column-d").hover(function(){
  $(".slideItem").attr('class', "slideItem style-d");
}, function(){
  $(".slideItem").attr('class', "slideItem");
})
$(".column-e").hover(function(){
  $(".slideItem").attr('class', "slideItem style-e");
  $(".slideContainer").css("background-color", "black");
}, function(){
  $(".slideItem").attr('class', "slideItem");
  $(".slideContainer").css("background-color", "white");
})
$(".column-f").hover(function(){
  $(".slideItem").attr('class', "slideItem style-f");
}, function(){
  $(".slideItem").attr('class', "slideItem");
})
$(".column-g").hover(function(){
  $(".slideItem").attr('class', "slideItem style-g");
  $(".slideContainer").css("background-color", "black");
}, function(){
  $(".slideItem").attr('class', "slideItem");
  $(".slideContainer").css("background-color", "white");
})
$(".column-h").hover(function(){
  $(".slideItem").attr('class', "slideItem style-h");
}, function(){
  $(".slideItem").attr('class', "slideItem");
})