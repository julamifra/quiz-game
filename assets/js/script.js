
let username = document.getElementById('username').innerHTML || '...';
let idsQuestionDisplayed = [];



document.addEventListener("DOMContentLoaded", function(e){
    if(window.location.pathname === '/'){
        let inputUsername = document.getElementById('input-username');
        let submitButtonUsername = document.getElementById('submit-indexhtml');
    
        inputUsername.addEventListener('input', function(e){
            submitButtonUsername.disabled = inputUsername.value ? false : true; 
        })
    
        submitButtonUsername.addEventListener('click', function(e){
            if(username !== '...') {
                redirectPage('game.html');
                startGame();
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
    } else if(window.location.pathname === '/game.html'){
        const answersBox = document.getElementsByClassName('answer-box');
        for(let answerBox of answersBox){
            answerBox.addEventListener('click', function(){
                console.log('click: ', answerBox.id)
            })
        }
        getQuestion();
    }
});


/**
 * 
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
 * 
 */
function redirectPage(path) {
    window.location.href = window.location.origin + `/${path}`;
}




/**
 * 
 */
function getQuestion(){

    let flagAskQuestion = true;
    while(flagAskQuestion) {
        const random_num = Math.floor(Math.random() * data_questions.length) + 1;
        if(idsQuestionDisplayed.includes(random_num)) {
            getQuestion()
        } else {
            flagAskQuestion = false;
            idsQuestionDisplayed.push(random_num)
            displayQuestion(random_num);
        }
    }
}


/**
 * 
 */
function displayQuestion(question_id){
    const questionElement = document.getElementsByClassName('question-box')[0].getElementsByTagName('span')[0];
    const answerElements = document.getElementsByClassName('answer-box')

    const questionObject = data_questions[question_id];

    questionElement.innerHTML = questionObject.question;
    answerElements[0].innerHTML = questionObject.A;
    answerElements[1].innerHTML = questionObject.B;
    answerElements[2].innerHTML = questionObject.C;
    answerElements[3].innerHTML = questionObject.D;

}