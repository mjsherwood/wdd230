
// Java for hamburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


// Get the current date
var dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
var currentDate = new Date();
var date = currentDate.toLocaleDateString("en-US", dateOptions);
var day = new Date().getDay();

// Set the date in the header
document.querySelector("#date").innerHTML = date;

// Get the current year
var currentYear = new Date().getFullYear();

// Set the year in the footer
document.querySelector("#year").innerHTML = currentYear;

// Get the last modified date of the index.html file
var lastModified = document.lastModified;

// Set the last modified date in the footer
document.querySelector("#lastUpdated").innerHTML = lastModified;

// Set the days that announcement bar is shown

const banner = document.getElementById("banner");
const today = new Date().getDay();

if (today === 1 || today === 2) {
  banner.style.display = "block";
}

// Hidden images on hero slider and change dots

//const slides = document.querySelectorAll(".slide");
//const dots = document.querySelectorAll(".dot");
//let currentSlide = 0;

//function changeSlide(n) {
//  slides[currentSlide].style.display = "none";
//  dots[currentSlide].classList.remove("active");
//  currentSlide = (currentSlide + n + slides.length) % slides.length;
//  slides[currentSlide].style.display = "grid";
//  dots[currentSlide].classList.add("active");
//}

//dots.forEach((dot, index) => {
//  dot.addEventListener("click", function() {
//    changeSlide(index - currentSlide);
//  });
//});

//setInterval(() => changeSlide(1), 10000);