$("#designP").click(function() {
    $(".design-wwd-p").toggle()
    $("#design-im").fadeToggle(400, "linear");
    $("figcaption").css({"font-weight": "bold"})
})
$("#developmentP").click(function() {
  $(".development-wwd-p").toggle()
  $("#development-im").fadeToggle(400, "linear");
  $("figcaption").css({"font-weight": "bold"})
})
$("#productP").click(function() {
  $(".product-wwd-p").toggle()
  $("#product-im").fadeToggle(400, "linear");
  $("figcaption").css({"font-weight": "bold"})
})

  $(".wwd-card").mouseenter(function() {
    $('.wwd-card').css('cursor', 'pointer')
  });

  //PORTFOLIO SECTION

$(".portfolio-images").hover(function() {
  $(this).css("filter", "blur(5px)"); 
  $(".div-port").show()
}, function() {
  $(this).css("filter", "none");
  $(".div-port").hide()
});
