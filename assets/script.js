var buttonStart = document.querySelector('.btn-start');
var startPage = document.querySelector('.coding-start');
var timeCount = document.querySelector('.time');
var time = 75;
var questionsList = document.querySelector('#questions');
var questionIndex = 0;
var feedbackEl = document.querySelector('#feedback');
var choicesEl = document.querySelector('#choices');
var timeInt;
var feedbackInt;
var endPageEl = document.querySelector('#end-page');
var finalScore = document.querySelector('#score');
var submitBtn = document.getElementById('submit-button');
var initialsEl = document.getElementById('initials');


buttonStart.addEventListener('click', function(){
    startPage.setAttribute('style','display:none');
    questionsList.removeAttribute('class');
    timeCount.textContent = time;
    timeInt = setInterval(function(){
        time--;
        timeCount.textContent = time;
    }, 1000);
    questionsArray();
});

function questionsArray(){
    var curQuestion = questions[questionIndex];
    var titleQuestion = document.querySelector('#question-title');
    titleQuestion.textContent = curQuestion.title;
    // var choicesEl = document.querySelector('#choices');
    choicesEl.innerHTML='';
   
    for (var i = 0; i < curQuestion.choices.length; i++){
        var option = curQuestion.choices[i];
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class','choice');
        choiceBtn.setAttribute('value',option);
        choiceBtn.textContent = i + 1 + '. ' + option;
        choicesEl.append(choiceBtn);
    }
    
};

choicesEl.addEventListener('click',questionButton);
function questionButton (e){
    var buttonClick = e.target;
    feedbackEl.removeAttribute('class')
    if (buttonClick.value !== questions[questionIndex].answer){
        time -= 15;
        timeCount.textContent = time;
        feedbackEl.textContent = 'That is incorrect!';
    } else {
        feedbackEl.textContent = 'That is correct!';
    };
    
    feedbackInt = setInterval(function(){
        feedbackEl.setAttribute('class','hidden');
    },2500);
    
    questionIndex++;
    
    if (time <= 0 || questionIndex === questions.length){
        endQuiz();
    } else {
        questionsArray();
    }
};

function endQuiz(){
    clearInterval(timeInt);
    questionsList.setAttribute('class','hidden');
    endPageEl.removeAttribute('class');
    finalScore.textContent = time;
};

function submitScore(){
    var initials = initialsEl.value.trim();
        var userScore = {
            score: time,
            initials: initials,
        };   
    var highScore = JSON.parse(window.localStorage.getItem('userScore')) || [];
    highScore.push(userScore)
    window.localStorage.setItem('userScore', JSON.stringify(highScore));
    window.location.href = 'highscoreSheet.html';
    }

submitBtn.addEventListener('click',function(event){
        event.preventDefault();
        submitScore();
        getScore();
    });

function getScore(){
    document.getElementById('highscores').innerHTML = highScore.userScore;
}