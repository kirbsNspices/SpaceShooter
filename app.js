import Player from "./src/Player.js";
import InputHandler from "./src/Input.js";
import Bullet from "./src/Bullet.js";
import GameManager from "./src/GameManager.js";
import BulletManager from "./src/BulletManager.js";
import UI from "./src/ui/UI.js";
import EnemyManager from "./src/EnemyManager.js";
import LivesUI from "./src/ui/LivesUI.js";
import AmmoUI from "./src/ui/AmmoUI.js";


window.onload=function(){

const canvas = document.getElementById("gameArea");
const c = canvas.getContext("2d");
let hasStarted = 0;
const canvasWidth = canvas.width;



let bgArray = [];

// Instantiations
let player = new Player(canvas.width / 2, canvas);
let gameManager = new GameManager(player, canvas);
let bm = new BulletManager(player, canvas, c);
new InputHandler(player, canvas, bm);
let em = new EnemyManager(player, canvas, c, gameManager);

//UI Instantiation
let livesUI = new LivesUI(canvasWidth - 30, 20);
let ammoUI = new AmmoUI(10, 30, canvas);

/*gameManager.getEm(em);*/

class Background {
    constructor(y){
        this.x = 0;
        this.y = y;
        this.moveSpeed = 2;
        this.img = document.getElementById("background");
    }

    drawBackground(){
        c.drawImage(this.img, this.x, this.y);
    }

    moveBackground(){
        if(this.y <= canvas.height-this.moveSpeed){
            this.y += this.moveSpeed;
        }else{
            this.y = -canvas.height;
            this.y += this.moveSpeed;
        }
    }
}

//Setup the array of background tiles
for(let $i = 0; $i < 2; $i++){
    if($i == 0){
        let bg = new Background(0);
        bgArray.push(bg);
    }else{
        let bg = new Background(-canvas.height);
        bgArray.push(bg);
    }
}



function drawAllBg(){
    for(let $i = 0; $i < bgArray.length; $i++){
        bgArray[$i].drawBackground();
        bgArray[$i].moveBackground();
    }
}

function Draw(){
    drawAllBg();
    if(bm.bulletArray.length > 0){
        bm.drawAllBullets();
    }
    player.drawPlayer(c);
    em.drawAllEnemys(c);
    ammoUI.drawAmmo(player, c);
    livesUI.drawLives(player, c);
    if(player.isReloading){
        ammoUI.reloading(c);
    }
}

let lastTime = 0;

let startBtn = document.getElementById("startButton");

startBtn.addEventListener("click", function(){
    if(!hasStarted){
        startBtn.style.display = "none";
        gameManager.gameRunning = 1;
        gameLoop();
        em.addEnemy(em);
        hasStarted = 1;
    }
});

function gameLoop(timestamp){
    if(gameManager.gameRunning){
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;
    
        c.clearRect(0, 0, innerWidth, innerHeight);
        Draw(deltaTime);
        em.checkCollision(bm, em);
        em.enemyScore(em);
        requestAnimationFrame(gameLoop);
        player.update(deltaTime);
    }
    if(!gameManager.gameRunning){
        em.stopEnemies();
    }
}



//gameLoop();


}