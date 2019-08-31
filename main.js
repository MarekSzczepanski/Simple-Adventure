const playButton = document.querySelector(".playButton");
const enemyName = document.querySelector(".enemyName");
const enemyImg = document.getElementById("enemyImg");
let chosenMonster;
const startGame = () => {
    playButton.style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector(".playerWrap").style.display = "flex";
    document.querySelector(".enemyWrap").style.display = "flex";
    document.querySelector(".attack").style.display = "flex";
    document.querySelector(".wrap").style.flexDirection = "row";
    document.querySelector(".wrap").style.justifyContent = "space-between";
    this.newPlayer = new Player(100, 0, knife);
    let monsterHealth;
    let monsterGold;
    const stats = (minHealth, maxHealth, minGold, maxGold) => {
        monsterHealth = Math.floor(Math.random() * (maxHealth - minHealth)) + minHealth;
        monsterGold = Math.floor(Math.random() * (maxGold - minGold)) + minGold;
    }
    const randomMonster = Math.random();
    if (randomMonster >= 0.4 && randomMonster < 0.7) {
        enemyName.textContent = "wolf";
        enemyImg.src = "images/wolf.png";
        stats(8, 11, 1, 5);
        this.newWolf = new Wolf(monsterHealth, monsterGold);
        chosenMonster = newWolf;
    }
    else if (randomMonster >= 0.7 && randomMonster < 0.9) {
        enemyName.textContent = "troll";
        enemyImg.src = "images/troll.png";
        stats(11, 15, 3, 7);
        this.newTroll = new Troll(monsterHealth, monsterGold);
        chosenMonster = newTroll;
    }
    else if (randomMonster >= 0.9  && randomMonster < 0.97) {
        enemyName.textContent = "dragon";
        enemyImg.src = "images/dragon.png";
        stats(20, 25, 8, 15);
        this.newTroll = new Dragon(monsterHealth, monsterGold);
        chosenMonster = newDragon;
    }
    else if (randomMonster >= 0.97) {
        enemyName.textContent = "wizard";
        enemyImg.src = "images/wizard.png";
        stats(10, 12, 20, 40);
        this.newTroll = new Wizard(monsterHealth, monsterGold);
        chosenMonster = newWizard;
    }
    else {
        enemyName.textContent = "rat";
        enemyImg.src = "images/rat.png";
        stats(5, 7, 0, 3);
        this.newRat = new Rat(monsterHealth, monsterGold);
        chosenMonster = newRat;
    }
    console.log(randomMonster);
}
playButton.addEventListener("click", startGame);
const attackMonster = () => {
    newPlayer.attack();
    console.log(typeof chosenMonster)
    chosenMonster.attack();
}
document.querySelector(".attackButton").addEventListener("click", attackMonster);