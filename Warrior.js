const Character = require('./Character');

class Warrior extends Character {
    constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
        super(name, lifepoints, attackPts, defensePts);
        this.shieldPts = shieldPts;
        this.position = 'defense';
    }

    attack(target) {
        if (this.position === 'attack') {
            const damage = this.attackPts - target.defensePts;
            if (damage > 0) {
                target.lifepoints -= damage;
            }
            console.log(`${this.name} atacou ${target.name} causando ${damage} de dano.`);
        } else {
            console.log(`${this.name} está em posição de defesa e não pode atacar.`);
        }
    }

    changePosition() {
        if (this.position === 'attack') {
            this.position = 'defense';
            this.defensePts += this.shieldPts;
        } else {
            this.position = 'attack';
            this.defensePts -= this.shieldPts;
        }
        console.log(`${this.name} mudou para a posição de ${this.position}.`);
    }
}

module.exports = Warrior;