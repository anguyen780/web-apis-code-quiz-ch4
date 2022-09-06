const buttonStart = document.querySelector('.btn-start');
const startPage = document.querySelector('.coding-start');
var timeCount = document.querySelector('.time');
var time = 75;
var questionsList = document.querySelector('#questions');
questionsList.setAttribute('style','display:none');
var questionIndex = 0;

buttonStart.addEventListener('click', function(){
    startPage.setAttribute('style','display:none');
    questionsList.removeAttribute('style');
    timeCount.textContent = time;
    var timeInt = setInterval(function(){
        time--;
        timeCount.textContent = time;
    }, 1000);
    questionsArray();
});

function questionsArray(){
    var curQuestion = questions[questionIndex];
    var titleQuestion = document.querySelector('#question-title');
    titleQuestion.textContent = curQuestion.title;
    var choicesEl = document.querySelector('#choices');
    choicesEl.innerHTML='';

    for (var i = 0; i < curQuestion.choices.length; i++){
        var option = curQuestion.choices[i];
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class','choice');
        choiceBtn.setAttribute('value','option');
        choiceBtn.textContent = i + 1 + '. ' + option;
        choicesEl.append(choiceBtn);
    }
};

