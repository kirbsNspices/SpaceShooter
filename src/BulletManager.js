import Bullet from "./Bullet.js";

export default class BulletManager{

    constructor(player, canvas, c){
        this.bulletArray = [];
        this.p = player;
        this.canvas = canvas;
        this.c = c;
        console.log("Bullet Manager has been instantiated.")
        
    }

    instantiateBullet(){
        let b = new Bullet(this.p.x, this.canvas, this.c);
    
        if(this.bulletArray.length >= 5){
            this.bulletArray.shift();
            this.bulletArray.push(b);
            this.p.ammo--;
        }else{
            this.bulletArray.push(b);
            this.p.ammo--;
        }
    };

    drawAllBullets(){
        for(let $i = 0; $i < this.bulletArray.length; $i++){
            this.bulletArray[$i].drawBullet();
            this.bulletArray[$i].moveBullet();
        }
    }
}