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

  //MESSAGE ALERT

function myFunction() {
  let popup = document.querySelector("#popup");
  let empty = document.querySelector("#name").value && document.querySelector("#email").value
    if(empty == ""){
        popup.classList.toggle("none");
        alert("Please fill in all the slots of the form!")
        return false;
  } else{
        popup.classList.toggle("show");
        document.querySelector("#popup").innerHTML = 
          "Hi " + document.querySelector("#name").value + ". We have received your message and we'll get back to you soon." ;
  }
}

$("input[type='submit']").click(function subFunction() { return false; });
