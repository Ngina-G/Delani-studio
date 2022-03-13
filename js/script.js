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
// function myFunction() {
//   let popup = document.getElementById("popup");
//   if(document.getElementById("name").value.length == 0){
//     popup.classList.toggle("show");
//      document.getElementById("popup").innerHTML = 
//         "Hi " + document.getElementById("name").value + ". We have received your message and we'll get back to you soon." ;}
//   else if(document.getElementById("name").value === undefined){
//         popup.classList.toggle("hide");
//       }
//   }
function myFunction() {
  let popup = document.getElementById("popup");
  let empty = document.getElementById("name").value && document.getElementById("email").value
    if(empty == ""){
        popup.classList.toggle("none");
        alert("Please fill in all the slots of the form!")
        return false;
  } else{
          popup.classList.toggle("show");
     document.getElementById("popup").innerHTML = 
        "Hi " + document.getElementById("name").value + ". We have received your message and we'll get back to you soon." ;
  }
}
$("input[type='submit']").click(function subFunction() { return false; });

// function submitForm() {
//   let frm = document.getElementsByName('contact-form')[0];
//   frm.submit(); // Submit the form
//   frm.reset();  // Reset all form data
//   return false; // Prevent page refresh
// }