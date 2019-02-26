export default class GameManager{

    constructor(player, canvas, bullet,){
        this.gameRunning = 1;
        this.gameOverScreen = document.getElementById('gameOverScreen');
        this.scoreDisplay = document.getElementById('scoreInsert');
        this.player = player;
        console.log("Game Manager has been instantiated.");
    }

    gameOver(){
        this.gameRunning = 0;

        //Check for high score
        let highScore = window.localStorage.getItem('highScore');
        
        //Set high score
        if(highScore){
            console.log("got here");
            if(this.player.score > highScore){
                window.localStorage.setItem('highScore', this.player.score);
            }
        }else{
            window.localStorage.setItem('highScore', this.player.score);
        };

        //Display Game Over Screen
        document.getElementById('scoreInsert').innerHTML = this.player.score;
        this.gameOverScreen.style.display = "block";
    }
}