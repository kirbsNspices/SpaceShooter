class Player {
    constructor(x, canvas){
        this.x = x;
        this.y = canvas.height - 60;
        this.speed = 0;
        this.moveSpeed = 5;
        this.maxSpeed = 5;
        this.img = document.getElementById("ship");
        this.xOffset = this.img.width / 2;
        this.yOffset = this.img.height / 2;
        this.ammo = 10;
        this.isReloading = 0;
        this.lives = 2;
        this.score = 0;
        this.c = canvas;
        console.log("Player has been instantiated.")
    }

        //Draw PLayer
    drawPlayer(c){
        c.drawImage(this.img, (this.x - this.xOffset), (this.y - this.yOffset));
    }

    movePlayer(dir){
        if(this.speed >= this.maxSpeed){
            this.speed = this.maxSpeed;
        }else if(this.speed <= -this.maxSpeed){
            this.speed = -this.maxSpeed;
        }else{
            this.speed += (dir * this.moveSpeed);
        }
    }

    stopMove(){
        this.speed = 0;
    }

    update(deltatime){
        if(!deltatime) return;

        this.x += this.speed;

        if(this.x < (0 + this.xOffset)){
            this.x = 0 + this.xOffset;        
        }
        if(this.x > (this.c.width - this.xOffset)){
            this.x = this.c.width - this.xOffset;        
        }
    }

    shoot(bulletManager){
        if(this.ammo > 0 && !this.isReloading){
            bulletManager.instantiateBullet();
        }else{
            console.log('No Ammo Left');
        }
    }

    reload(player){
        this.isReloading = 1;
        setTimeout(function(){ 
            player.ammo = 10;
            player.isReloading = 0;
         }, 1000);
    }

    //Add to score
    addToScore(val){
        this.score += val;
        console.log("Current score: "+this.score);
    }
}
export default Player;