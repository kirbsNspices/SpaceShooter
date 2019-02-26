export default class Enemy{
    constructor(x){
        this.x = x;
        this.y = 0;
        this.moveSpeed = 3;
        this.img = document.getElementById("enemy");
        this.width = this.img.width;
        //this.width = 40;
        this.height = 40;
        this.hasScored = 0;
        this.xOffset = this.img.width/2;
        this.yOffset = this.img.height/2;
        this.score = 40;
        console.log("Enemy instantiated at"+this.x)
    }
    drawEnemy(c){
        c.drawImage(this.img, (this.x - this.xOffset), (this.y - this.yOffset));
        this.moveEnemy();
    }

    moveEnemy(){
        this.y += this.moveSpeed;
    }
}
