import UI from "./UI.js";

export default class LivesUI extends UI{
    constructor(xPos, yPos){
        super(xPos, yPos);
        this.img = document.getElementById("heart");
        this.xOffset = this.img.width / 2;
        this.yOffset = this.img.height / 2;
        console.log("LivesUI has been instantiated.");
    }

    drawLives(player, c){
        let lives = player.lives;
        for(let $i = 0; $i < lives; $i++){
            c.drawImage(this.img, (this.PosX - 10 - ($i * this.img.width)), (this.PosY - this.yOffset));
        }
    }
}