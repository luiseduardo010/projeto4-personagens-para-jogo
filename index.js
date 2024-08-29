const Character = require('./Character');
const Mulher = require('./Mulher');
const Capitão = require('./Capitão');
const Batman = require('./Batman');



const hero = new Character('Hulk', 100, 20, 10);
const mulher = new Mulher('Mulher Maravilha', 80, 25, 5);
const capitão = new Capitão('Capitão América', 70, 15, 5, 30);
const batman = new Batman('Batman', 120, 30, 20, 10);




hero.attack(mulher);
mulher.attack(hero);
capitão.attack(batman);
capitão.heal(hero);
batman.changePosition();
batman.attack(capitão);
batman.changePosition();
batman.attack(capitão);
