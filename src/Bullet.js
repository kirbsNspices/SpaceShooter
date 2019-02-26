export default class Bullet{

    constructor(x, canvas, c){
            this.x = x;
            this.y = canvas.height - 60;
            this.velocity = 5;
            this.img = document.getElementById("rocket");
            this.xOffset = this.img.width/2;
            this.yOffset = this.img.height/2;
            this.ctx = c;
            console.log("Bullet has been instantiated.")
        }
    
        drawBullet(){
            this.ctx.drawImage(this.img, (this.x - this.xOffset), (this.y - this.yOffset));
        }
    
        moveBullet(){
            if(this.y > -this.img.height){
                this.y -= this.velocity;
            }
        }
    }
