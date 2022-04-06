let username = document.getElementById('username').innerHTML;

document.addEventListener("DOMContentLoaded", function(){
    let inputUsername = document.getElementById('input-username');
    let submitButtonUsername = document.getElementById('submit-indexhtml');

    inputUsername.addEventListener('input', function(e){
        submitButtonUsername.disabled = inputUsername.value ? false : true; 
    })

    submitButtonUsername.addEventListener('click', function(e){
        if(username !== '...') {
            redirectPage('game.html')
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
});

function setParamsStartGame(){
    const newMessage = `Hello <strong>${username}!</strong> The quiz is about to start.
                        15 questions will be shown. Guess as many as you can.`
    document.getElementsByClassName('question-box')[0].getElementsByTagName('span')[0].innerHTML = newMessage
    document.getElementById('submit-indexhtml').innerHTML = "Start";
    document.getElementById('input-username-error').style.display = 'none';
    document.getElementById('good-luck-message').style.display = 'block';
}

function redirectPage(path) {
    window.location.href = window.location.origin + `/${path}`;

}



