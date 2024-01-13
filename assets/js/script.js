document.addEventListener("DOMContentLoaded", function () {

    // create an object to hold all possible questions
    let questions = [];

    let questionOne = {
        questionText: "QUESTION 1 TEXT",
        options: ["OPTION1", "OPTION2", "OPTION3", "OPTION4"]
    };

    let questionTwo = {
        questionText: "QUESTION 2 TEXT",
        options: ["2OPTION1", "2OPTION2", "2OPTION3", "2OPTION4"]
    };

    questions[1] = questionOne;
    questions[2] = questionTwo;

    let questionNumber = 1;

    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function () {
        checkAnswer(++questionNumber, questions);
    });

    generateQuestion(questionNumber, questions);
});



/**
 * Generates a question from the available questions and displays it on the page
 */
function generateQuestion(questionNumber, questions) {
    
    console.log(`Generate Q number: ${questionNumber}`);

    // If the next question button has been created, remove it
    let nextQuestionButton = document.getElementById("btn-nextQ");
    if (nextQuestionButton !== null) {
        nextQuestionButton.remove();
    }

    let question = questions[questionNumber];
    let questionElement = document.getElementById("question");
    questionElement.innerText = question.questionText;

    let options = document.getElementsByClassName("options");
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = question.options[i];
    }
}

/**
 * Function to check if answer is correct or not and increment question number and score
 */
function checkAnswer(questionNumber, questions) {

    // TO DO: Check if selected answer is correct here and then make a decision on what to do with that

    console.log(`Check Answer Q number: ${questionNumber}`);
    
    if (questionNumber < questions.length)
    {
        createNextQuestionButton(questionNumber, questions);
    }
}

function createNextQuestionButton(questionNumber, questions) {
    console.log(`Create Button Q number: ${questionNumber}`);
    let body = document.body;
    let nextQuestionButton = document.createElement("button");
    nextQuestionButton.id = "btn-nextQ";
    nextQuestionButton.innerText = "Next Question";
    body.appendChild(nextQuestionButton);
    nextQuestionButton.addEventListener("click", function() {
        generateQuestion(questionNumber, questions);
    });
}