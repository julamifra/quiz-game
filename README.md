# QUIZ-GAME

Quiz-game is developed to test user's general knowledge, by asking 15 random questions. Desiginig a very user-friendly and colourful interface, users will be able to set their user name and later on proceed directly to answer the questions.

After 15 questions a pop-up will show up, where the final score will be displayed. Users will be able to start a new game by clicking on the button below this score.

![Responsice Mockup](./docs/wireframe_quiz_game.JPG)

# Table of Contents

- [User Stories](#user-stories)
- [Features](#features)
- [Future features](#future-features)
- [Typography and color scheme](#typography-and-color-scheme)
- [Wireframes](#wireframes)
- [Technologies](#technologies)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## User Stories

1. As an user I want to see the welcome message, the logo and the username input as the first page of the website.
2. As an user I want to be able to set my username, where the input validate the non-alphanumeric characters.
3. As an user I want to see the second view where the first question and the 4 answers are displayed.
4. As an user I want to see a pop-up when the quiz is completed, in which I can see the score and a button to restart the game.

## Features

- **Header**

  ![Header](./docs/header_quiz_game.JPG)

  - Feature at the very top of the website.
  - In the header only appear the logo and name of the website game.

- **Username section**

  ![Username Section](./docs/main_section_first_page_quiz_game.JPG)

  - In here, firstly, users will see a welcome message, encouriging them to play and setting their username.
  - In order to start the quiz, users must enter their username, which will be displayed in the left top of the page while the user is playing.
  - This username parameter is required, in order to start the game. The submit button will remain disable, until the user types any alphanumeric character (maximum 10 characteres).
  - By clicking on the submit button, if any strange character has been set, an error message will be shown.
    ![Error message in username input](./docs/error_message_input.JPG)
  - After choosing and appropiate name and submiting it, a new encoured message will be displayed. Users must click on the Start button in order to be redirected to the game section page.
    ![Good luck message](./docs/good_luck_message.JPG)

- **Game section**

  ![Game Section](./docs/main_section_second_page_quiz_game.JPG)

  - This is the main page where 15 different questions (with 4 possible answeres) will be appearing, until the game is done.
  - Within the orange box, the questions will be shown. Below the question, four possibles answered will be displayed with a different colour each.
  - Once one answer has been selected, by clicking on the submit button, users will known the correct answer.
  - If the correct answer is selected, the view will look like this:
    ![Correct answer selected](./docs/correct_answer_selected.JPG)
    By clicking on the next button, the new question will be displayed.
  - If an incorrect answer is submited, the new view will show which answer was the correct one.
    ![Incorrect answer selected](./docs/incorrect_answer.JPG)
  - In addition, on the right top users will be able to see a round counter, that will be displaying the number of the current question that is answering:
    ![Round counter](./docs/round_counter.JPG)

- **Score section**

  ![Score Section](./docs/score_section_quiz_game.JPG)

  - Once the quiz is completed, a pop-up will appear in the middle of the page, in which the user will be able to see th final score.
  - A 'Try again' button is displayed below this score message. By clicking on it, the game will be restarted, and new 15 questions will be asked to the user.

## Future features

- One posible future feature might be to create a score, where users can see all their scores.
- Another possible feature would be to divide the type of questions that are shown, by giving a topic select.

## Typography and color scheme

- **Typography**

  - The typography for this game project is not as important as other websites where are more focused on what the user is reading, as their contains a lot of paragraphs to read.

- **Color Scheme**
  - In this case, I've decided to use a very colourful style, like on the [Kahoot](https://www.kahoot.com/) website.
  - Each of the answers has a different colourful color, as well as the question box.

## Wireframes

- [Moqups](https://app.moqups.com/) is the app used to prepare the first idea of the project.
- Below some snippets of them are shown:

![Mockup first page](./docs/quiz_game_mockup_1.JPG)
![Mockup second page](./docs/quiz_game_mockup_2.JPG)

## Technologies

- HTML and CSS:
  - **HTML** is the standard markup language for Web pages.
  - **CSS** is the language we use to style and HTML document.
  - Both programing languages are the main technologies used in this project in order to create the webpage.
- JavaScript: ...
- GitHub Pages: it is a static site hosting service. It take the code from a Github reposiroty and publishes a website. It will be explained in further detail in the [Deployment](#Deployment) section.
- GitPod: this tool has been chosen as the IDE of this project. It is a cloud development environment accessible via a browser, that can be run directly from the github repository.

## Testing

### Test cases and fixed bugs

- In order to pass all the User Stories tests, these are the steps that have been followed to test them:

  - User Story number 1:

    - The logo and the name of the game must be centered on the top of the website.

    -> Bugs found: No bugs were found.

  - User Story number 2:

    - The username input must remain on the left side, while the submit button on the right, just beside the input.
    - This username parameter will be a required parameter.
    - 10 characteres is the maxixum that an user can set on the username input.
    - The non-alphanumeric validation will be done after click on the submit button.
    - This button is disabled, unless the user type any character.
    - If the validation is correct, no error will be shown and the user will be redirected to the next view. On the contrary, an error message is displayed underneath the input.

    -> Bugs found:

  - User Story number 3:
    - The set username must be displayed on the left top, under the question mark icon.
    - The first question must the displayed on the orange box, located on the top of this game section.
    - The round counter (1/15) must be on the right top of the screen.
    - Just underneath the question, the four posible answers of this question will appear. Each of them, with a different background color.
    - On the bottom of the website, the submit button will be in the middle, and the correct and incorrect score just on each sides of it.
    - By clicking on one of the answers, it will set a red border color.
    - Then, the submit button will be enable. By clicking on it, the user will submit the chosen answer.
    - If the answer is correct, the correct answer score will add 1 to it.
    - If the answer is incorrect, the incorrect answer score will add 1 to it.
    - Then, the user will see a next button in stead of the submit button. By clicking on it, the next question will be displayed and the round counter will add 1 to it.
  - User Story number 4:
    - Once the quiz is completed, after 15 questions, a blue pop-up will be displayed on the website.
    - Within it, a 'congratulations' message and a 'Try again' button will be displayed.
    - By clicking on the 'Try again' button, the user will restart the quiz by having 15 different questions.

### Code validation

- **HTML:**
  ![Screenshot html validation](./docs/html_validator_quiz_game.JPG)

- **CSS:**
  ![Screenshot 1 css validation](./docs/css_validator_quiz_game_1.JPG)
  ![Screenshot 2 css validation](./docs/css_validator_quiz_game_2.JPG)

- **JS:**
  ![Screenshot 1 JS validation](./docs/js_validator_quiz_game.JPG)
  ![Screenshot 2 JS validation](./docs/js_validator_quiz_game_2.JPG)

<!-- https://jshint.com/ -->

### Lighthouse - Dev Tools

### Supported screens and browsers

## Deployment

## Credits

### Content and Media

<!-- https://google.github.io/styleguide/jsguide.html#jsdoc-general-form -->
