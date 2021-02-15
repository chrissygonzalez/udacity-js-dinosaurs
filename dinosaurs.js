const elements = {
  dinoSubmit: document.getElementById('dino-submit'),
  dinoForm: document.getElementById('dino-form'),
  dinoGraphic: document.getElementById('dino-graphic'),
  dinoGraphicGrid: document.getElementById('dino-graphic-grid'),
  nameField: document.getElementById('name'),
  feetField: document.getElementById('feet'),
  inchesField: document.getElementById('inches'),
  poundsField: document.getElementById('pounds'),
  dietField: document.getElementById('diet'),
  humanName: document.getElementById('human-name'),
};

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
    elements.dinoGraphicGrid.appendChild(div);
  }
}

class Human {
  constructor({ name, feet, inches, pounds, diet }) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.pounds = pounds;
    this.diet = diet;
    this.height = this.inches + this.feet * 12;
    this.image = 'images/human.png';
  }

  displayHuman() {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${this.name}</h3><img src=${this.image} />`;
    elements.dinoGraphicGrid.appendChild(div);
  }
}

let human;

const getFormValues = () => {
  return {
    name: elements.nameField.value,
    feet: elements.feetField.value,
    inches: elements.inchesField.value,
    pounds: elements.poundsField.value,
    diet: elements.dietField.value,
  };
};

const createDinosaurs = (dinosaurs) => {
  return dinosaurs.map((dino) => {
    return new Dinosaur(dino);
  });
};

const shuffleDinosForDisplay = () => {
  const dinosaurObjects = createDinosaurs(dinoData.dinosaurStats);
  const shuffledDinosaurs = dinosaurObjects.sort(() => Math.random() - 0.5);
  return {
    dinos1: [...shuffledDinosaurs].splice(0, 4),
    dinos2: [...shuffledDinosaurs].splice(4, 4),
  };
};

const createDinoGrid = () => {
  const dinos = shuffleDinosForDisplay();
  dinos.dinos1.map((dinosaur) => dinosaur.displayDinosaur());
  human.displayHuman();
  dinos.dinos2.map((dinosaur) => dinosaur.displayDinosaur());
};

const submitForm = (e) => {
  e.preventDefault();

  human = (function createHuman() {
    return new Human(getFormValues());
  })();

  createDinoGrid();

  elements.dinoForm.classList.add('invisible');
  elements.dinoGraphic.classList.remove('invisible');
};

elements.dinoSubmit.addEventListener('click', submitForm);
