
let currentItemIndex = 0; // keep track of the current item index
let items = []; // declare items array

function displayItem(item) {
  const container = document.getElementById('containerrr');
  container.innerHTML = ''; // clear the container

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = item.poster;
  img.alt = item.title;
  card.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const title = document.createElement('h2');
  title.textContent = item.title;
  cardContent.appendChild(title);

  const description = document.createElement('p');
  description.textContent = item.description;
  cardContent.appendChild(description);

  card.appendChild(cardContent);

  container.appendChild(card);
}

function displayNextItem() {
  currentItemIndex++;
  if (currentItemIndex >= items.length) {
    currentItemIndex = 0;
  }
  const currentItem = items[currentItemIndex];
  displayItem(currentItem);
}

function displayPrevItem() {
  currentItemIndex--;
  if (currentItemIndex < 0) {
    currentItemIndex = items.length - 1;
  }
  const currentItem = items[currentItemIndex];
  displayItem(currentItem);
}

fetch('http://localhost:3000/schools')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    items = data; // assign the data to the items array
    displayItem(items[currentItemIndex]); // display the first item
  })
  .catch(error => console.error(error));

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', displayNextItem);

const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', displayPrevItem);

   


function displayForm(item) {
    const container = document.getElementById('containerrr');
    container.innerHTML = '';  
  
    const form = document.createElement('form');
  
    const schoolLabel = document.createElement('label');
    schoolLabel.textContent = 'school:';
    const schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.name = 'school';
    schoolLabel.appendChild(schoolInput);
    form.appendChild(schoolLabel);
  
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);
  
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone Number:';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneLabel.appendChild(phoneInput);
    form.appendChild(phoneLabel);
  
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailLabel.appendChild(emailInput);
    form.appendChild(emailLabel);
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      // handle form submission here
      console.log(`Submitted form for item "${item.title}":`, formValues);
  
      // hide the form inputs and show a message
      form.style.display = 'none';
      const message = document.createElement('p');
      message.textContent = 'You have been signed up!';
      container.appendChild(message);
    });
    form.appendChild(submitButton);
  
    container.appendChild(form);
  }
  


