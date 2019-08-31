class Character {
    constructor(health, gold) {
        this.health = health;
        this.gold = gold
        document.querySelector(".enemyHealth").textContent = this.health;
    }
}
class Player extends Character {
    constructor(health, gold, weapon) {
        super(health, gold);
        this.weapon = weapon;
        document.querySelector(".playerHealth").textContent = this.health;
        document.querySelector(".goldSpan").textContent = this.gold;
        document.querySelector(".weaponSpan").textContent = this.weapon.name;
        document.querySelector(".activeWeapon").src = this.weapon.image;
    }
    attack() {
        this.power = Math.floor(Math.random() * (this.weapon.attack[1]+1 - this.weapon.attack[0])) + this.weapon.attack[0];
        console.log("power player", this.power);
        document.querySelector(".enemyHealth").textContent -= this.power;
        console.log("health player", this.health);
        console.log("gold player", this.gold);
    }
}
class Rat extends Character {
    constructor(health, gold) {
        super(health, gold);
    }
    attack() {
        this.power = Math.floor(Math.random() * (3 - 1)) + 1;
        console.log("power", this.power);
        document.querySelector(".playerHealth").textContent -= this.power;
        console.log("health", this.health);
        console.log("gold", this.gold);
    }
}
class Wolf extends Character {
    constructor(health, gold) {
        super(health, gold);
    }
    attack() {
        this.power = Math.floor(Math.random() * (5 - 2)) + 2;
        console.log("power", this.power);
        document.querySelector(".playerHealth").textContent -= this.power;
        console.log("health", this.health);
        console.log("gold", this.gold);
    }
}
class Troll extends Character {
    constructor(health, gold) {
        super(health, gold);
    }
    attack() {
        this.power = Math.floor(Math.random() * (10 - 5)) + 5;
        console.log("power", this.power);
        document.querySelector(".playerHealth").textContent -= this.power;
        console.log("health", this.health);
        console.log("gold", this.gold);
    }
}
class Dragon extends Character {
    constructor(health, gold) {
        super(health, gold);
    }
    attack() {
        this.power = Math.floor(Math.random() * (21 - 10)) + 10;
        console.log("power", this.power);
        document.querySelector(".playerHealth").textContent -= this.power;
        console.log("health", this.health);
        console.log("gold", this.gold);
        document.querySelector(".enemyHealth").textContent = this.health;
    }
}
class Wizard extends Character {
    constructor(health, gold) {
        super(health, gold);
    }
    attack() {
        this.power = Math.floor(Math.random() * (41 - 15)) + 15;
        console.log("power", this.power);
        document.querySelector(".playerHealth").textContent -= this.power;
        console.log("health", this.health);
        console.log("gold", this.gold);
        document.querySelector(".enemyHealth").textContent = this.health;
    }
}