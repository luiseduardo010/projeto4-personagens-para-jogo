const Character = require('./Character');

class Mage extends Character {
    constructor(name, lifepoints, attackPts, defensePts, magicPts) {
        super(name, lifepoints, attackPts, defensePts);
        this.magicPts = magicPts;
    }

    attack(target) {
        const damage = this.attackPts + this.magicPts - target.defensePts;
        if (damage > 0) {
            target.lifepoints -= damage;
        }
        console.log(`${this.name} atacou ${target.name} causando ${damage} de dano.`);
    }

    heal(target) {
        const healAmount = 2 * this.magicPts;
        target.lifepoints += healAmount;
        console.log(`${this.name} curou ${target.name} em ${healAmount} pontos de vida.`);
    }
}

module.exports = Mage;