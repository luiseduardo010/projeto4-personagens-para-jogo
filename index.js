const Character = require('./Character');
const Thief = require('./Thief');
const Mage = require('./Mage');
const Warrior = require('./Warrior');

const hero = new Character('Flash', 100, 50, 10);
const thief = new Thief('Mulher Maravilha', 80, 35, 5);
const mage = new Mage('Capitão América', 70, 25, 5, 30);
const warrior = new Warrior('Thor', 120, 30, 25, 10);

hero.attack(thief);
thief.attack(hero);
mage.attack(warrior);
mage.heal(hero);
warrior.changePosition();
warrior.attack(mage);
warrior.changePosition();
warrior.attack(mage);
