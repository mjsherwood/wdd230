// Get the current year
var currentYear = new Date().getFullYear();

// Set the year in the footer
document.querySelector("#year").innerHTML = currentYear;

// Get the last modified date of the index.html file
var lastModified = document.lastModified;

// Set the last modified date in the footer
document.querySelector("#lastUpdated").innerHTML = lastModified;