var highscoresList = document.getElementById('highscoresList');
var clearScore = document.querySelector('.btn-clear');

function showScore(){
    
    var highScore = JSON.parse(localStorage.getItem('highScore'));
    function compare(a, b) {
        if (a.score > b.score){
            return -1;
        }
        else if (a.score < b.score){
            return 1;
        }
        return 0;
    };
    
    highScore.sort(compare);

    for (var i = 0; i < highScore.length; i++){
        var listScore = document.createElement('li');
        var currentQue = highScore[i];
        listScore.textContent = `${currentQue.initials} - ${currentQue.score}`
        highscoresList.appendChild(listScore);
        listScore.setAttribute('style','text-align:center ; font-size: 150%')
    };
};

clearScore.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});

showScore();


