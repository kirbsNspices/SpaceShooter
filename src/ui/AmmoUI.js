import UI from "./UI.js";

export default class AmmoUI extends UI{
    constructor(xPos, yPos, canvas){
        super(xPos, yPos, canvas);
        console.log("AmmoUI has been instantiated.");
    }

    drawAmmo(player, c){
        let ammo = player.ammo;
        c.font = this.fontSize+"px Arial";
        c.fillStyle = "#FFFFFF"
        c.fillText(ammo, this.PosX, this.PosY);
    }

    reloading(c){
        c.font = this.fontSize+"px Helvetica";
        c.fillStyle = "#FFFFFF"
        c.fillText("Reloading...", (this.canvas.width/2) - 80, this.canvas.height/2);
    }
}