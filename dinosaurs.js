const dinoSubmit = document.getElementById('dino-submit');
const dinoForm = document.getElementById('dino-form');
const dinoGraphic = document.getElementById('dino-graphic');
const dinoGraphicGrid = document.getElementById('dino-graphic-grid');

const nameField = document.getElementById('name');
const feetField = document.getElementById('feet');
const inchesField = document.getElementById('inches');
const poundsField = document.getElementById('pounds');
const dietField = document.getElementById('diet');

const humanName = document.getElementById('human-name');

const dinoData = {
  dinosaurStats: [
    {
      species: 'Triceratops',
      weight: 13000,
      height: 114,
      diet: 'herbivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'First discovered in 1889 by Othniel Charles Marsh',
      image: 'images/triceratops.png',
    },
    {
      species: 'Tyrannosaurus Rex',
      weight: 11905,
      height: 144,
      diet: 'carnivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'The largest known skull measures in at 5 feet long.',
      image: 'images/tyrannosaurusrex.png',
    },
    {
      species: 'Ankylosaurus',
      weight: 10500,
      height: 55,
      diet: 'herbivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'Ankylosaurus survived for approximately 135 million years.',
      image: 'images/ankylosaurus.png',
    },
    {
      species: 'Brachiosaurus',
      weight: 70000,
      height: '372',
      diet: 'herbivore',
      where: 'North America',
      when: 'Late Jurassic',
      fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
      image: 'images/brachiosaurus.png',
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
      image: 'images/stegosaurus.png',
    },
    {
      species: 'Elasmosaurus',
      weight: 16000,
      height: 59,
      diet: 'carnivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
      image: 'images/elasmosaurus.png',
    },
    {
      species: 'Pteranodon',
      weight: 44,
      height: 20,
      diet: 'carnivore',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
      image: 'images/pteranodon.png',
    },
    {
      species: 'Pigeon',
      weight: 0.5,
      height: 9,
      diet: 'herbivore',
      where: 'World Wide',
      when: 'Holocene',
      fact: 'All birds are living dinosaurs.',
      image: 'images/pigeon.png',
    },
  ],
};

class Dinosaur {
  constructor({ species, weight, height, diet, where, when, fact, image }) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
  }

  displayDinosaur() {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${this.species}</h3><img src=${this.image} />`;
    // const h3 = document.createElement('h3');
    // const img = document.createElement('img')
    // h3.innerText = this.species;
    // div.appendChild(h3);
    dinoGraphicGrid.appendChild(div);
  }
}

const createDinosaurObjects = (dinosaurs) => {
  return dinosaurs.map((dino) => {
    return new Dinosaur(dino);
  });
};

const dinosaurObjects = createDinosaurObjects(dinoData.dinosaurStats);

class Human {
  constructor({ name, feet, inches, pounds, diet }) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.pounds = pounds;
    this.diet = diet;
  }

  displayHuman() {
    humanName.innerText = this.name;
  }
}

let human;

const getFormValues = () => {
  return {
    name: nameField.value,
    feet: feetField.value,
    inches: inchesField.value,
    pounds: poundsField.value,
    diet: dietField.value,
  };
};

const submitForm = (e) => {
  e.preventDefault();

  human = (function createHuman() {
    return new Human(getFormValues());
  })();

  human.displayHuman();
  dinosaurObjects.map((dinosaur) => dinosaur.displayDinosaur());

  dinoForm.classList.add('invisible');
  dinoGraphic.classList.remove('invisible');
};

dinoSubmit.addEventListener('click', submitForm);
