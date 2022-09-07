var highscoresList = document.getElementById('highscoresList');


function saveScore(){
    if (highScore !== null){
        document.getElementById('highscoresList').innerHTML = highScore.initials
        document.getElementById('highscoresList').innerHTML = highScore.score
    }
}


