const dinoSubmit = document.getElementById('dino-submit');
const dinoForm = document.getElementById('dino-form');
const dinoGraphic = document.getElementById('dino-graphic');

const nameField = document.getElementById('name');
const feetField = document.getElementById('feet');
const inchesField = document.getElementById('inches');
const poundsField = document.getElementById('pounds');
const dietField = document.getElementById('diet');

const dinoData = {
  Dinos: [
    {
      species: 'Triceratops',
      weight: 13000,
      height: 114,
      diet: 'herbivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'First discovered in 1889 by Othniel Charles Marsh',
    },
    {
      species: 'Tyrannosaurus Rex',
      weight: 11905,
      height: 144,
      diet: 'carnivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'The largest known skull measures in at 5 feet long.',
    },
    {
      species: 'Ankylosaurus',
      weight: 10500,
      height: 55,
      diet: 'herbivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'Ankylosaurus survived for approximately 135 million years.',
    },
    {
      species: 'Brachiosaurus',
      weight: 70000,
      height: '372',
      diet: 'herbivore',
      where: 'North America',
      when: 'Late Jurassic',
      fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
    },
    {
      species: 'Stegosaurus',
      weight: 11600,
      height: 79,
      diet: 'herbivore',
      where: 'North America, Europe, Asia',
      when: 'Late Jurassic to Early Cretaceous',
      fact:
        'The Stegosaurus had between 17 and 22 separate places and flat spines.',
    },
    {
      species: 'Elasmosaurus',
      weight: 16000,
      height: 59,
      diet: 'carnivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
    },
    {
      species: 'Pteranodon',
      weight: 44,
      height: 20,
      diet: 'carnivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
    },
    {
      species: 'Pigeon',
      weight: 0.5,
      height: 9,
      diet: 'herbivore',
      where: 'World Wide',
      when: 'Holocene',
      fact: 'All birds are living dinosaurs.',
    },
  ],
};

class Dinosaur {
  constructor({ species, weight, height, diet, where, when, fact }) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
}

const createDinosaurObjects = (dinosaurs) => {
  return dinosaurs.map((dino) => {
    return new Dinosaur(dino);
  });
};

const dinosaurObjects = createDinosaurObjects(dinoData.Dinos);
console.log(dinosaurObjects);

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
  dinoForm.classList.add('invisible');
  dinoGraphic.classList.remove('invisible');

  const formValues = {
    name: nameField.value,
    feet: feetField.value,
    inches: inchesField.value,
    pounds: poundsField.value,
    diet: dietField.value,
  };

  return (() => {
    new Human(formValues);
  })();
};

dinoSubmit.addEventListener('click', submitForm);
