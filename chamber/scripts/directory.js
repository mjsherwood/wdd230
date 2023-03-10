const url = 'json/data.json';

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
  }

  getBusinessData(url);

  const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let icon = document.createElement('img');
      let phone = document.createElement('p');
      let weburl = document.createElement('p');
      let street = document.createElement('p')

      // Build the h2 content out to show the business name - finish the template string
      h2.textContent = `${business.name}`;
      phone.textContent = `Phone: ${business.phone}`;
      weburl.textContent = `${business.weburl}`;
      street.textContent = `Street: ${business.street}`


      // Build the image portrait by setting all the relevant attribute
      icon.setAttribute('src', business.image);
      icon.setAttribute('alt', `${business.name} Logo`);
      icon.setAttribute('loading', 'lazy');
      icon.setAttribute('width', 'auto');
      icon.setAttribute('height', '100');


      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(icon);
      card.appendChild(weburl);
      card.appendChild(phone);
      card.appendChild(street);
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression