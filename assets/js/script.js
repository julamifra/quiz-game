
let username = document.getElementById('username').innerHTML || '...';
let idsQuestionDisplayed = [];
// variable 'data_questions' is declared in the other script


document.addEventListener("DOMContentLoaded", function(e){
    const path = window.location.pathname.split('/')[window.location.pathname.split('/').length-1]
    if( path === '' || path === 'index.html'){
        let inputUsername = document.getElementById('input-username');
        let submitButtonUsername = document.getElementById('submit-indexhtml');
    
        inputUsername.addEventListener('input', function(e){
            submitButtonUsername.disabled = inputUsername.value ? false : true; 
        })
    
        submitButtonUsername.addEventListener('click', function(e){
            if(username !== '...') {
                redirectPage('game.html');
            } else {
                let usernameInput = inputUsername.value;
                const pattern = /^[a-zA-Z0-9]+$/;
                const errorMessage = document.getElementById("error");
                if(!pattern.test(usernameInput)){
                    errorMessage.style.visibility = 'visible';
                } else {
                    errorMessage.style.visibility = 'hidden';
                    username = document.getElementById('username').innerHTML = usernameInput;
                    document.getElementById('input-username').value = '';
    
                    setParamsStartGame();
                }
            }
        })
    } else if(path === 'game.html'){
        const answersBox = document.getElementsByClassName('answer-box');
        for(let answerBox of answersBox){
            answerBox.addEventListener('click', function(e){
                for(let element of answersBox){
                    if(element.id !== answerBox.id){
                        element.classList.remove('answer-box-active')
                    }
                };
                e.target.classList.add('answer-box-active');
                document.getElementById('submit-answer').disabled = false;
            })
        }
        getQuestion();
    }
});


/**
 * Display the elements and set the text for the 'Start' view 
 */
function setParamsStartGame(){
    const newMessage = `Hello <strong>${username}!</strong> The quiz is about to start.
                        15 questions will be shown. Guess as many as you can.`
    document.getElementsByClassName('question-box')[0].getElementsByTagName('span')[0].innerHTML = newMessage
    document.getElementById('submit-indexhtml').innerHTML = "Start";
    document.getElementById('input-username-error').style.display = 'none';
    document.getElementById('good-luck-message').style.display = 'block';
}


/**
 * Redirect to the location given by parameter
 */
function redirectPage(path) {
    window.location.href = window.location.origin + `/${path}`;
}




/**
 * Get a new question to display and call to the displayQuestion function
 */
function getQuestion(){

    let flagAskQuestion = true;
    while(flagAskQuestion) {
        const random_num = Math.floor(Math.random() * data_questions.length) + 1;
        if(idsQuestionDisplayed.includes(random_num)) {
            getQuestion()
        } else {
            flagAskQuestion = false;
            idsQuestionDisplayed.push(random_num);
            displayQuestion(random_num);
        }
    }
}


/**
 * Display the question and answers given by the function parameter 
 */
function displayQuestion(question_id){
    const questionElement = document.getElementsByClassName('question-box')[0].getElementsByTagName('span')[0];
    const answerElements = document.getElementsByClassName('answer-box');
    
    for(let element of answerElements){
        element.classList.remove('answer-box-active');
    };
    document.getElementById('submit-answer').disabled = true;

    const questionObject = data_questions[question_id];

    questionElement.innerHTML = questionObject.question;
    answerElements[0].innerHTML = questionObject.A;
    answerElements[1].innerHTML = questionObject.B;
    answerElements[2].innerHTML = questionObject.C;
    answerElements[3].innerHTML = questionObject.D;

}

/**
 * Function called by the submit answer button, verify the correct answer and call the function
 *  to increment correct/incorrect score.
 * Call getQuestion function.
 * Call the function to show the final message score, if 15 questions have been shown
 */
function submitAnswer(){
    const answerSelected = document.getElementsByClassName('answer-box-active')[0].innerHTML;
    const indexPlaying = idsQuestionDisplayed[idsQuestionDisplayed.length-1];
    const questionObj = data_questions[indexPlaying];
    const isCorrect = questionObj[questionObj.answer] === answerSelected;
    if(isCorrect){
        incrementCorrectScore();
    } else {
        incrementIncorrectScore();
    }

    if(idsQuestionDisplayed.length === 15){
        showFinalMessage();
    } else {
        getQuestion();
        incrementRoundCounter();
    }
}

/**
 * Gets the current tally of correct answers from the DOM and increments it by 1
 */
function incrementCorrectScore() {
    let oldScore = parseInt(document.getElementById("correct-score").innerText);
    document.getElementById("correct-score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementIncorrectScore() {
    let oldScore = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++oldScore;
}


/**
 * Gets the current tally of round counter from the DOM and increments it by 1
 */
function incrementRoundCounter(){
    const elem = document.getElementById('round-counter');
    let oldRound = parseInt(elem.innerText.split('/')[0]);
    const newRound = `${++oldRound}/15`;
    document.getElementById('round-counter').innerText = newRound;
}


/**
 * Dispaly a pop-up with the final score and two buttons.
 * All the elements are set to green
 */
function showFinalMessage(){
    document.getElementById('final-message').style.visibility = 'visible';

    document.getElementById("final-message-score").innerText = document.getElementById("correct-score").innerText;
    const answerElements = document.getElementsByClassName('answer-box');
    for(let element of answerElements){
        element.style.backgroundColor = 'grey';
        element.style.border = 'none';
    };
    document.getElementsByClassName('question-box')[0].style.backgroundColor = 'grey';
    document.getElementById("incorrect-score").style.color = 'grey';
    document.getElementById("correct-score").style.color = 'grey';
    document.getElementById('submit-answer').disabled = true;
}
