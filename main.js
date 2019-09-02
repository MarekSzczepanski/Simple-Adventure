let chosenMonster;
let dropped = {
    attack: ["empty", "empty"] // Avoid null
}
const startGame = () => {
    document.querySelector(".attackButton").addEventListener("click", attackMonster);
    document.querySelector(".playButton").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector(".newEnemyButton").style.display = "none";
    document.querySelector(".playerWrap").style.display = "flex";
    document.querySelector(".enemyWrap").style.display = "flex";
    document.querySelector(".attack").style.display = "flex";
    document.querySelector(".wrap").style.flexDirection = "row";
    document.querySelector(".wrap").style.justifyContent = "space-between";
    document.getElementById("enemyImg").animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 0,
        fill: "forwards",
    });
    let monsterHealth;
    let monsterGold;
    const dropText = document.querySelectorAll(".dropText");
    dropText.forEach(item => {
        item.remove();
    })
    const stats = (minHealth, maxHealth, minGold, maxGold) => {
        monsterHealth = Math.floor(Math.random() * (maxHealth - minHealth)) + minHealth;
        monsterGold = Math.floor(Math.random() * (maxGold - minGold)) + minGold;
    }
    const dropRoll = (monster) => {
        let flag = 0;
        for (let i=0; i<monster.items.length; i++) {
            monsterDrop = Math.floor(Math.random() * (101 - 0)) + 0;
            const dropListElement = document.createElement("p");
            document.querySelector(".drop").appendChild(dropListElement);
            dropListElement.classList.add("dropText");
            dropListElement.textContent = monster.items[i].name + ": " + monster.chance[i] + "%";
            if (monsterDrop <= monster.chance[i] && flag < 1) {
                dropped = monster.items[i]
                flag = 1;
            }
        }
    }
    const randomMonster = Math.random();
    if (randomMonster >= 0.4 && randomMonster < 0.7) {
        stats(8, 11, 1, 5);
        this.newWolf = new Wolf("wolf", "images/wolf.png", monsterHealth, monsterGold);
        chosenMonster = newWolf;
    }
    else if (randomMonster >= 0.7 && randomMonster < 0.9) {
        stats(11, 15, 3, 7);
        this.newTroll = new Troll("troll", "images/troll.png", monsterHealth, monsterGold);
        chosenMonster = newTroll;
    }
    else if (randomMonster >= 0.9  && randomMonster < 0.97) {
        stats(20, 25, 8, 15);
        this.newDragon = new Dragon("dragon", "images/dragon.png", monsterHealth, monsterGold);
        chosenMonster = newDragon;
    }
    else if (randomMonster >= 0.97) {
        stats(14, 16, 20, 40);
        this.newWizard = new Wizard("wizard", "images/wizard.png", monsterHealth, monsterGold);
        chosenMonster = newWizard;
    }
    else {
        stats(5, 7, 0, 3);
        this.newRat = new Rat("rat", "images/rat.png", monsterHealth, monsterGold);
        chosenMonster = newRat;
    }
    dropRoll(chosenMonster.drop);
    document.querySelector(".enemyName").textContent = chosenMonster.name;
    document.getElementById("enemyImg").src = chosenMonster.image;
}
document.querySelector(".playButton").addEventListener("click", startGame);
const attackMonster = () => {
    chosenMonster.attack();
    newPlayer.attack();
    if (document.querySelector(".enemyHealth").textContent < 1) {
        newPlayer.gold += chosenMonster.gold;
        document.querySelector(".goldSpan").textContent = newPlayer.gold;
        document.querySelector(".enemyHealth").textContent = 0;
        document.getElementById("enemyImg").animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 1000,
            fill: "forwards",
        });
        document.querySelector(".newEnemyButton").style.display = "block";
        document.querySelector(".newEnemyButton").addEventListener("click", startGame);
        document.querySelector(".attackButton").removeEventListener("click", attackMonster);
        if (dropped.attack[0] + dropped.attack[1] > newPlayer.weapon.attack[0] + newPlayer.weapon.attack[1]) {
            newPlayer.newWeapon();
            document.querySelector(".dropPopUp").style.display = "flex";
            document.querySelector(".lootImg").src = `images/${dropped.name}_big.png`;
            if (dropped.name.charAt(0) === "a") {
                document.querySelector(".lootedWeapon").textContent = "an " + dropped.name;
            }
            else {
                document.querySelector(".lootedWeapon").textContent = "a " + dropped.name;
            }
            const closeDropWindow = () => {
                document.querySelector(".dropPopUp").style.display = "none";
            }
            document.querySelector(".continueButton").addEventListener("click", closeDropWindow);
        }
    }
    if (newPlayer.health < 1) {
        newPlayer.health = 0;
        document.querySelector(".playerHealth").textContent = 0;
        location.reload();
    }
}
const buyPotion = () => {
    if (newPlayer.gold > 4) {
        for (let i=1; i<9; i++) {
            if (document.querySelector(".potion"+i).src === "file:///D:/Folder/Programowanie/Projekty/Simple%20Adventure/index.html") {
                newPlayer.gold -= 5;
                document.querySelector(".goldSpan").textContent = newPlayer.gold;
                document.querySelector(".potion"+i).src = "images/potion.png";
                document.querySelector(".potion"+i).style.display = "block";
                return;
            }
        }
    }
}
document.querySelector(".shop").addEventListener("click", buyPotion);
const heal = (e) => {
    const healPower = Math.floor(Math.random() * (41 - 20)) + 20;
    newPlayer.health = parseInt(newPlayer.health) + healPower;
    e.target.src = "";
    e.target.style.display = "none";
    if (newPlayer.health > 100) {
        newPlayer.health = 100;
    }
    document.querySelector(".playerHealth").textContent = newPlayer.health;
}
const potions = document.querySelectorAll("#potion");
potions.forEach(potion => {
    if (document.querySelector(".playerHealth").textContent < 100) {
        potion.addEventListener("click", heal);
    }
})