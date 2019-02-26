import Enemy from "./Enemy.js";

export default class EnemyManager{
    constructor(player, canvas, c, gamemanager){
        this.enemyArray = [];
        this.tempArray = [];
        this.p = player;
        this.canvas = canvas;
        this.c = c;
        this.test;
        this.gm = gamemanager;

        console.log("Enemy Manager has been instantiated.")
    }

    addEnemy(em){
        if(this.gm.gameRunning){
            this.test = setInterval(this.instantiateEnemy, 3000, em);
        }
    }

    stopEnemies(){
        clearInterval(this.test);
    }


    instantiateEnemy(em){
        let b = new Enemy((Math.floor(Math.random() * 10) + 1) * 50);
        if(em.enemyArray.length >= 10){
            em.enemyArray.shift();
            em.enemyArray.push(b);
        }else{
            em.enemyArray.push(b);
        }
    }

    drawAllEnemys(c){
        for(let $i = 0; $i < this.enemyArray.length; $i++){
            this.enemyArray[$i].drawEnemy(c);
            this.enemyArray[$i].moveEnemy();
        }
    }
    checkCollision(bulletManager, enemyMan){
        let ba = bulletManager.bulletArray;
        let testrer = enemyMan;

        for(let $i = 0; $i < ba.length; $i++){
            for(let $j = 0; $j < this.enemyArray.length; $j++){
                //Check if x coords match
                if((ba[$i].x + ba[$i].xOffset) > (this.enemyArray[$j].x - (this.enemyArray[$j].width/2)) && (ba[$i].x + ba[$i].xOffset) < (this.enemyArray[$j].x + this.enemyArray[$j].width)){
                    //Check if y coords match
                    if(ba[$i].y > (this.enemyArray[$j].y - (this.enemyArray[$j].height/2)) && ba[$i].y < (this.enemyArray[$j].y + (this.enemyArray[$j].height/2))){
                    this.killEnemy($j, testrer);
                    console.log("enemy has been hit");

                    //Remove Bullet
                    ba.splice($i, 1);
                    }
                }
            }
        }
    }

    killEnemy(enemy, r){
        let ra = r;
        let enm = enemy;
        console.log('Killing enemy');
        this.p.addToScore(ra.enemyArray[enm].score);
        console.log(ra.enemyArray[enm].score);
        //Remove enemy from array
        ra.enemyArray.splice(enm, 1);

        //Move all values down into new array so no null values exist
        
    }

    enemyScore(enmyArry){
        let e = enmyArry.enemyArray;
        for(let $i = 0; $i < e.length; $i++){
            if(e[$i].y > this.canvas.height){
                if(!e[$i].hasScored){
                    e[$i].hasScored = 1;

                    //Remove enemy from array
                    e.splice([$i], 1);

                    //Remove Life from Player
                    if(this.p.lives > 1){
                        this.p.lives -= 1;
                    }else{
                        this.gm.gameOver();
                    }
                    
                }
            }
        }
    }

}