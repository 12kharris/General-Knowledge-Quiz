document.addEventListener("DOMContentLoaded", function () {

    // create an object to hold all possible questions
    let questions = [];

    let questionOne = {
        questionText: "QUESTION 1 TEXT",
        options: [
            { option: "OPTION1", correct: 1 },
            { option: "OPTION2", correct: 0 },
            { option: "OPTION3", correct: 0 },
            { option: "OPTION4", correct: 0 }
        ]
    };

    let questionTwo = {
        questionText: "QUESTION 2 TEXT",
        options: [
            { option: "2OPTION1", correct: 0 },
            { option: "2OPTION2", correct: 0 },
            { option: "2OPTION3", correct: 1 },
            { option: "2OPTION4", correct: 0 }
        ]
    };

    // Array to hold order of questions
    let questionPositions = [];
    // Generate random positions for questions which must be unique
    for (let i = 0; i < 2; i++) {
        let rand;
        do {
            rand = Math.floor(Math.random() * 2);
        } while (questionPositions.includes(rand));
        questionPositions[i] = rand;
    }

    // questionPositions[i] is a random int so question order now random
    questions[questionPositions[0] + 1] = questionOne;
    questions[questionPositions[1] + 1] = questionTwo;

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

    // If the next question button has been created, remove it
    let nextQuestionButton = document.getElementById("btn-nextQ");
    if (nextQuestionButton !== null) {
        nextQuestionButton.remove();
    }

    let question = questions[questionNumber];
    let questionElement = document.getElementById("question");
    questionElement.innerText = question.questionText;

    let options = document.getElementsByClassName("options");

    // Loop through the different options, set the text of their labels and whether they are correct
    for (let i = 0; i < options.length; i++) {
        let optionText = options[i].getElementsByTagName("label")[0];
        let optionCorrect = options[i].getElementsByClassName("option")[0];
        optionText.innerText = question.options[i].option;
        optionCorrect.setAttribute("data-type", question.options[i].correct);
    }
}

/**
 * Function to check if answer is correct or not and increment question number and score
 */
function checkAnswer(questionNumber, questions) {

    // get the selected option
    let options = document.getElementsByClassName("option");
    let selectedOption;
    for (let option of options) {
        if (option.checked) {
            selectedOption = option;
        }
    }

    if (selectedOption.getAttribute("data-type") === "1") {
        console.log("CORRECT!");
    }
    else {
        console.log("WRONG!");
    }

    //console.log(`Correct? ${}`);

    // Check if there are any more questions and if the next question button hasn't already been created
    if (questionNumber < questions.length && document.getElementById("btn-nextQ") === null) {
        createNextQuestionButton(questionNumber, questions);
    }
}

function createNextQuestionButton(questionNumber, questions) {
    let body = document.body;
    let nextQuestionButton = document.createElement("button");
    nextQuestionButton.id = "btn-nextQ";
    nextQuestionButton.innerText = "Next Question";
    body.appendChild(nextQuestionButton);
    nextQuestionButton.addEventListener("click", function () {
        generateQuestion(questionNumber, questions);
    });
}