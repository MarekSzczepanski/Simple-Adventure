const playButton = document.querySelector(".playButton");
const enemyName = document.querySelector(".enemyName");
const enemyImg = document.getElementById("enemyImg");
let chosenMonster;
let dropped = {
    attack: ["empty", "empty"] // Avoid null
}
const startGame = () => {
    document.querySelector(".attackButton").addEventListener("click", attackMonster);
    playButton.style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector(".playerWrap").style.display = "flex";
    document.querySelector(".enemyWrap").style.display = "flex";
    document.querySelector(".attack").style.display = "flex";
    document.querySelector(".wrap").style.flexDirection = "row";
    document.querySelector(".wrap").style.justifyContent = "space-between";
    document.getElementById("enemyImg").animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 0,
        fill: "forwards",
    });
    document.querySelector(".newEnemyButton").style.display = "none";
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
                console.log(dropped);
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
    enemyName.textContent = chosenMonster.name;
    enemyImg.src =chosenMonster.image;
}
playButton.addEventListener("click", startGame);
const attackMonster = () => {
    chosenMonster.attack();
    newPlayer.attack();
    if (document.querySelector(".enemyHealth").textContent < 1) {
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
            document.querySelector(".lootImg").src=`images/${dropped.name}_big.png`;
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
        console.log("game over")
        newPlayer.health = 0;
        document.querySelector(".playerHealth").textContent = 0;
        location.reload();
    }
}