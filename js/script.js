$(".wwd-card").click(function() {
    $(".wwd-p").toggle()
    $(".image").fadeToggle(4000, "swing");
    $("figcaption").css({"font-weight": "bold"})
  })

  $(".wwd-card").mouseenter(function() {
    $('.wwd-card').css('cursor', 'pointer')
  });

$("")