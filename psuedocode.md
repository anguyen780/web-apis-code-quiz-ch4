We have a start button
    a timer will start (Set Interval)
    event handler on click, they are presented with the quetion as well as answer choices that are related to that question

    when an answer choice is clicked
        IF an answer is wrong, then decrement the variable timer
        Display that the user choice was incorrect, then move to next question
        IF an answer is correct, display that the user choice was correct (textContent)
        We want to increment score ++
    FOR loop to loop through the questions array to the next question

    When timer hits 0 OR no more questions
        THEN clear interval
        THEN allow user to input initials
        THEN link to highscores page
        Save data to local storage


var buttonEl = event.target;
if (buttonEl.value !== questions[currentQuestionIndex].answer){
    time -= 15;
    time = time - 15;

    if(time < 0){
        time = 0;
        clearInterval();
    }
}