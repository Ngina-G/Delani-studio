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

$(".container").hover(function() {
  $(".div-port").show()
}, function() {
  $(".div-port").hide()
});

