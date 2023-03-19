const url = 'json/data.json';

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

getBusinessData(url);

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let icon = document.createElement('img');
        let phone = document.createElement('p');
        let weburl = document.createElement('p');
        let street = document.createElement('p')

        h2.textContent = `${business.name}`;
        phone.textContent = `Phone: ${business.phone}`;
        weburl.textContent = `${business.weburl}`;
        street.textContent = `Street: ${business.street}`

        icon.setAttribute('src', business.image);
        icon.setAttribute('alt', `${business.name} Logo`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', 'auto');
        icon.setAttribute('height', '100');

        card.appendChild(h2);
        card.appendChild(icon);
        card.appendChild(weburl);
        card.appendChild(phone);
        card.appendChild(street);
        cards.appendChild(card);
    });

    gridButton.addEventListener('click', () => {
        cards.classList.remove('list-view');
        cards.querySelectorAll('section').forEach(card => card.classList.remove('list'));
        cards.querySelectorAll('img').forEach(img => img.classList.remove('list'));
        cards.querySelectorAll('h2').forEach(h2 => h2.classList.remove('list'));
        cards.querySelectorAll('p').forEach(p => p.classList.remove('list'));
    });

    listButton.addEventListener('click', () => {
        cards.classList.add('list-view');
        cards.querySelectorAll('section').forEach(card => card.classList.add('list'));
        cards.querySelectorAll('img').forEach(img => img.classList.add('list'));
        cards.querySelectorAll('h2').forEach(h2 => h2.classList.add('list'));
        cards.querySelectorAll('p').forEach(p => p.classList.add('list'));
    });
}