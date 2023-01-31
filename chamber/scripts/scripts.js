
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

$(document).ready(function () {

if (time > start.setHours(07,30) && time < end.setHours(14,30)) {
    $('.open').show();
    $('.closed').hide();
}
else {
    $('.open').hide();
    $('.closed').show();
    }
});

