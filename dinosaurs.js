const dinoSubmit = document.getElementById('dino-submit');
const dinoForm = document.getElementById('dino-form');
const dinoGraphic = document.getElementById('dino-graphic');

const nameField = document.getElementById('name');
const feetField = document.getElementById('feet');
const inchesField = document.getElementById('inches');
const poundsField = document.getElementById('pounds');
const dietField = document.getElementById('diet');

class Human {
  constructor({ name, feet, inches, pounds, diet }) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.pounds = pounds;
    this.diet = diet;
  }
}

const submitForm = (e) => {
  e.preventDefault();
  const human = new Human({
    name: nameField.value,
    feet: feetField.value,
    inches: inchesField.value,
    pounds: poundsField.value,
    diet: dietField.value,
  });
  console.log(human);
  dinoForm.classList.add('invisible');
  dinoGraphic.classList.remove('invisible');
};

dinoSubmit.addEventListener('click', submitForm);
