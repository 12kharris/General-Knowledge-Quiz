document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkAnswer());

    // create an object to hold all possible questions
    let questions = {};

    let questionOne = {
        questionText: "QUESTION 1 TEXT",
        options: ["OPTION1", "OPTION2", "OPTION3", "OPTION4"]
    };

    questions[1] = questionOne;

    let questionNumber = 1;

    runGame(questionNumber, questions);
});

/**
 * The main function which runs the game which is called when the page loads
 */
function runGame(questionNumber, questions) {
    generateQuestion(questionNumber, questions);



}

/**
 * Generates a question from the available questions and displays it on the page
 */
function generateQuestion(questionNumber, questions) {
    let question = questions[questionNumber];
    let questionElement = document.getElementById("question");
    questionElement.innerText = question.questionText;

    let options = document.getElementsByClassName("options");
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = question.options[i];
    }
}

function checkAnswer() {

}