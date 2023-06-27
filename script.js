
var textElement = document.querySelector(".text-element");

// detect when the text enters the viewport
window.onscroll = function() {
  if (textElement.getBoundingClientRect().top < window.innerHeight) {
    textElement.classList.add("active");
  }
};
