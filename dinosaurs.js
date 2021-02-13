const dinoSubmit = document.getElementById('dino-submit');
const dinoForm = document.getElementById('dino-form');
const dinoGraphic = document.getElementById('dino-graphic');

const submitForm = (e) => {
  e.preventDefault();
  dinoForm.classList.add('invisible');
  dinoGraphic.classList.remove('invisible');
};

dinoSubmit.addEventListener('click', submitForm);
