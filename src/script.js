// Get the button
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
// When the user clicks on the back-to-top button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
