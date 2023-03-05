// Hidden images on hero slider and change dots

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function changeSlide(n) {
  slides[currentSlide].style.display = "none";
  dots[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].style.display = "grid";
  dots[currentSlide].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", function() {
    changeSlide(index - currentSlide);
  });
});

setInterval(() => changeSlide(1), 10000);