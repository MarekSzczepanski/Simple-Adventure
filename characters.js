class Character {
    constructor(name, image, health, gold) {
        this.name = name;
        this.image = image;
        this.health = health;
        this.gold = gold
        document.querySelector(".enemyHealth").textContent = this.health;
    }
}
class Player extends Character {
    constructor(name, image, health, gold, weapon) {
        super(name, image, health, gold);
        this.weapon = weapon;
        document.querySelector(".playerHealth").textContent = this.health;
        document.querySelector(".goldSpan").textContent = this.gold;
        document.querySelector(".weaponSpan").textContent = this.weapon.name;
        document.querySelector(".activeWeapon").src = this.weapon.image;
    }
    attack() {
        this.power = Math.floor(Math.random() * (this.weapon.attack[1]+1 - this.weapon.attack[0])) + this.weapon.attack[0];
        document.querySelector(".enemyHealth").textContent -= this.power;
        this.health = document.querySelector(".playerHealth").textContent;
    }
    newWeapon() {
        this.weapon = dropped;
        document.querySelector(".weaponSpan").textContent = this.weapon.name;
        document.querySelector(".activeWeapon").src = dropped.image;
    }
}
class Rat extends Character {
    constructor(name, image, health, gold) {
        super(name, image, health, gold);
        this.drop = {
            items: [short_sword, club],
            chance: [10, 30]
        }
    }
    attack() {
        this.power = Math.floor(Math.random() * (3 - 1)) + 1;
        document.querySelector(".playerHealth").textContent -= this.power;
    }
}
class Wolf extends Character {
    constructor(name, image, health, gold) {
        super(name, image, health, gold);
        this.drop = {
            items: [morning_star, short_sword, club],
            chance: [10, 20, 30]
        }
    }
    attack() {
        this.power = Math.floor(Math.random() * (5 - 2)) + 2;
        document.querySelector(".playerHealth").textContent -= this.power;
    }
}
class Troll extends Character {
    constructor(name, image, health, gold) {
        super(name, image, health, gold);
        this.drop = {
            items: [axe, morning_star, club],
            chance: [5, 20, 80]
        }
    }
    attack() {
        this.power = Math.floor(Math.random() * (10 - 5)) + 5;
        document.querySelector(".playerHealth").textContent -= this.power;
    }
}
class Dragon extends Character {
    constructor(name, image, health, gold) {
        super(name, image, health, gold);
        this.drop = {
            items: [ancient_sword, royal_sword, axe, broad_sword, morning_star, short_sword, club],
            chance: [3, 10, 15, 20, 50, 60, 80]
        }
    }
    attack() {
        this.power = Math.floor(Math.random() * (21 - 10)) + 10;
        document.querySelector(".playerHealth").textContent -= this.power;
    }
}
class Wizard extends Character {
    constructor(name, image, health, gold) {
        super(name, image, health, gold);
        this.drop = {
            items: [magic_sword, ancient_sword, royal_sword, short_sword],
            chance: [1, 3, 20, 90]
        }
    }
    attack() {
        this.power = Math.floor(Math.random() * (41 - 15)) + 15;
        document.querySelector(".playerHealth").textContent -= this.power;
    }
}