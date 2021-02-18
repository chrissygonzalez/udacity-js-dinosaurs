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
  constructor(
    { species, weight, height, diet, where, when, fact, image },
    { height: humanHeight, pounds: humanWeight, diet: humanDiet }
  ) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
    this.fact = this.getRandomFact(humanHeight, humanWeight, humanDiet);
  }

  displayDinosaur() {
    const div = document.createElement('div');
    div.classList.add('dino-card');
    div.innerHTML = `
    <img src=${this.image} />
    <h3>${this.species}</h3>
    <p>${this.fact}</p>
    `;
    elements.dinoGraphicGrid.appendChild(div);
  }

  getRandomFact(humanHeight, humanWeight, humanDiet) {
    if (this.species === 'Pigeon') {
      return 'All birds are Dinosaurs.';
    }
    const facts = [
      this.compareHeight(humanHeight),
      this.compareWeight(humanWeight),
      this.compareDiet(humanDiet),
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  }

  compareHeight(humanHeight) {
    const diff = parseInt(this.height) - humanHeight;

    if (diff > 0) {
      return `${diff} inches taller than you.`;
    } else if (diff < 0) {
      return `${diff * -1} inches shorter than you.`;
    } else {
      return 'Same height as you.';
    }
  }

  compareWeight(humanWeight) {
    const diff = parseInt(this.weight) - parseInt(humanWeight);

    if (diff > 0) {
      return `${diff} pounds heavier than you.`;
    } else if (diff < 0) {
      return `${diff * -1} pounds lighter than you.`;
    } else {
      return 'Same weight as you.';
    }
  }

  compareDiet(humanDiet) {
    const FOOD = {
      herbivore: 'plants',
      carnivore: 'meat',
      omnivore: 'everything',
    };

    return this.diet === humanDiet
      ? `Also eats ${FOOD[this.diet]}.`
      : `Eats ${FOOD[this.diet]}.`;
  }
}

class Human {
  constructor({ name, feet, inches, pounds, diet }) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.pounds = pounds;
    this.diet = diet;
    this.height = this.calculateHeight();
    this.image = 'images/human.png';
  }

  calculateHeight() {
    if (this.inches && this.feet) {
      return parseInt(this.inches) + parseInt(this.feet) * 12;
    } else {
      return 0;
    }
  }

  displayHuman() {
    const div = document.createElement('div');
    div.innerHTML = `<img src=${this.image} /><h3>${this.name}</h3>`;
    elements.dinoGraphicGrid.appendChild(div);
  }
}

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

const shuffleAndSpliceDinos = (dinos) => {
  const shuffledDinosaurs = dinos.sort(() => Math.random() - 0.5);
  return {
    dinos1: [...shuffledDinosaurs].splice(0, 4),
    dinos2: [...shuffledDinosaurs].splice(4, 4),
  };
};

const createDinoGraphic = (dinos, human) => {
  const dinosaurs = dinos.map((dino) => {
    return new Dinosaur(dino, human);
  });
  const shuffled = shuffleAndSpliceDinos(dinosaurs);
  shuffled.dinos1.map((dinosaur) => dinosaur.displayDinosaur());
  human.displayHuman();
  shuffled.dinos2.map((dinosaur) => dinosaur.displayDinosaur());
};

const submitForm = (e) => {
  e.preventDefault();

  createDinoGraphic(
    dinoData.dinosaurStats,
    (() => {
      return new Human(getFormValues());
    })()
  );

  elements.dinoForm.classList.add('invisible');
  elements.dinoGraphic.classList.remove('invisible');
};

elements.dinoSubmit.addEventListener('click', submitForm);
