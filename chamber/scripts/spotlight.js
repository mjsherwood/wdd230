fetch('json/data.json')
  .then(response => response.json())
  .then(data => {
    const businesses = data.businesses.filter(business => business.membership >= 2 && business.membership <= 4);
    const spotlights = document.querySelectorAll('.spotlight');
    for (let i = 0; i < spotlights.length; i++) {
      if (businesses[i]) {
        const business = businesses[i];
        spotlights[i].innerHTML = `
          <div class="spotlight-image">
            <img src="${business.image}" alt="${business.name}" />
          </div>
          <div class="spotlight-content">
            <h2>${business.name}</h2>
            <p>${business.street}, ${business.city}, ${business.state} ${business.zip}</p>
            <p>${business.phone}</p>
            <a href="http://${business.weburl}" target="_blank">${business.weburl}</a>
          </div>
        `;
      } else {
        spotlights[i].style.display = 'none';
      }
    }
  })
  .catch(error => console.error(error));
