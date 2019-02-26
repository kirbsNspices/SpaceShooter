export default class InputHandler{

    constructor(player, canvas, bulletManager){

        console.log("Input Handler has been instantiated.")

        document.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 37:
                case 65:
                    player.movePlayer(-1);
                    break;
                case 39:
                case 68:
                    player.movePlayer(1);
                    break;
                case 32:
                    player.shoot(bulletManager);
                    break;
                case 82:
                    console.log('reloading...');
                    player.reload(player);
            }
        });
        document.addEventListener("keyup", event => {
            switch(event.keyCode){
                case 37:
                case 65:
                    if(player.speed < 0){
                        player.stopMove();
                    }
                    break;
                case 39:
                case 68:
                    if(player.speed > 0){
                        player.stopMove();
                    }
                    break;
            }
        });
    }
}
