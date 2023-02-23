  // Get the current date and time
var date = new Date();
  
  // Format the date and time as a string in ISO format
var isoDate = date.toISOString();
  
  // Set the value of the hidden field to the formatted date and time
document.getElementById("load_time").value = isoDate;


// Get the modal
var modal = document.querySelector('.modal');

// Get the button that opens the modal
var btn = document.querySelector('.more-info-btn');

// Get the <span> element that closes the modal
var closeBtn = document.querySelector('.close-modal-btn');

// When the user clicks the button, open the modal
btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});