$(".wwd-card").click(function() {
    $(".wwd-p").toggle()
    $(".image").fadeToggle(4000, "swing");
    $("figcaption").css({"font-weight": "bold"})
  })

  $(".wwd-card").mouseenter(function() {
    $('.wwd-card').css('cursor', 'pointer')
  });

  //PORTFOLIO SECTION
// $(".portfolio-images").hover("handlerIn, handlerOut" ,function(){
//   $(this).css({"transform": "scale(1.2)"})
// })
$(".portfolio-images").hover(function() {
  $(this).css("transform", "scale(1.2)");
}, function() {
  $(this).css({"transform": "scale(1)"});
});