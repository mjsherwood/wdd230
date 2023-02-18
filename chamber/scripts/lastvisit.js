// Get the last visit time from local storage
let lastVisit = localStorage.getItem('lastVisit');

// If there is no last visit time in local storage, set it to the current time and display "First Visit"
if (!lastVisit) {
  lastVisit = new Date().getTime();
  localStorage.setItem('lastVisit', lastVisit);
  document.getElementById('last-visit').textContent = "First Visit";
} else {
  // Calculate the number of days since the last visit
  const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
  const daysSinceLastVisit = Math.round((new Date().getTime() - lastVisit) / ONE_DAY_IN_MILLISECONDS);

  // Update the div with the number of days since the last visit
  document.getElementById('last-visit').textContent = `${daysSinceLastVisit}`;

  // Update lastVisit to the current time
  lastVisit = new Date().getTime();
  localStorage.setItem('lastVisit', lastVisit);
}