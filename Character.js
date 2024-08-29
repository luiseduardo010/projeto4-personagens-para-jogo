class Character {
    constructor(name, lifepoints, attackPts, defensePts) {
        this.name = name;
        this.lifepoints = lifepoints;
        this.attackPts = attackPts;
        this.defensePts = defensePts;
    }

    attack(target) {
        const damage = this.attackPts - target.defensePts;
        if (damage > 0) {
            target.lifepoints -= damage;
        }
        console.log(`${this.name} atacou ${target.name} causando ${damage} de dano.`);
    }
}

module.exports = Character;







