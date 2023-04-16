// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
}
attack(){
    return this.strength;
}
receiveDamage(damage){
    this.health -= damage;
}
}
// Viking
class Viking extends Soldier {
    constructor(nameValue, helathValue, strengthValue) {
        super(helathValue, strengthValue)
        this.name = nameValue
    }
}

// Saxon
class Saxon {}
class Saxon extends Soldier {
    receiveDamage(damage) {
        console.dir(this)
        this.health -= damage
        if (this.health === 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has receives ${damage} points of damage`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addVikings(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){}
}

