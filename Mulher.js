const Character = require('./Character');

class Thief extends Character {
    attack(target) {
        const damage = 2 * (this.attackPts - target.defensePts);
        if (damage > 0) {
            target.lifepoints -= damage;
        }
        console.log(`${this.name} atacou ${target.name} causando ${damage} de dano.`);
    }
}

module.exports = Thief;