document.addEventListener("DOMContentLoaded", function () {

    // create an object to hold all possible questions
    let questions = [];

    // CREATE A QUESTIONS CLASS THEN INITIALISE NEW QUESTIONS?
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

    let questionThree = {
        questionText: "QUESTION 3 TEXT",
        options: [
            { option: "3OPTION1", correct: 1 },
            { option: "3OPTION2", correct: 0 },
            { option: "3OPTION3", correct: 0 },
            { option: "3OPTION4", correct: 0 }
        ]
    };

    let questionFour = {
        questionText: "QUESTION 4 TEXT",
        options: [
            { option: "4OPTION1", correct: 1 },
            { option: "4OPTION2", correct: 0 },
            { option: "4OPTION3", correct: 1 },
            { option: "4OPTION4", correct: 0 }
        ]
    };

    let questionFive = {
        questionText: "QUESTION 5 TEXT",
        options: [
            { option: "5OPTION1", correct: 1 },
            { option: "5OPTION2", correct: 0 },
            { option: "5OPTION3", correct: 0 },
            { option: "5OPTION4", correct: 0 }
        ]
    };

    let questionSix = {
        questionText: "QUESTION 6 TEXT",
        options: [
            { option: "6OPTION1", correct: 0 },
            { option: "6OPTION2", correct: 0 },
            { option: "6OPTION3", correct: 1 },
            { option: "6OPTION4", correct: 0 }
        ]
    };

    let questionSeven = {
        questionText: "QUESTION 7 TEXT",
        options: [
            { option: "7OPTION1", correct: 0 },
            { option: "7OPTION2", correct: 0 },
            { option: "7OPTION3", correct: 1 },
            { option: "7OPTION4", correct: 0 }
        ]
    };

    let questionEight = {
        questionText: "QUESTION 8 TEXT",
        options: [
            { option: "8OPTION1", correct: 0 },
            { option: "8OPTION2", correct: 0 },
            { option: "8OPTION3", correct: 1 },
            { option: "8OPTION4", correct: 0 }
        ]
    };

    let questionNine = {
        questionText: "QUESTION 9 TEXT",
        options: [
            { option: "9OPTION1", correct: 0 },
            { option: "9OPTION2", correct: 0 },
            { option: "9OPTION3", correct: 1 },
            { option: "9OPTION4", correct: 0 }
        ]
    };

    let questionTen = {
        questionText: "QUESTION 10 TEXT",
        options: [
            { option: "10OPTION1", correct: 0 },
            { option: "10OPTION2", correct: 0 },
            { option: "10OPTION3", correct: 1 },
            { option: "10OPTION4", correct: 0 }
        ]
    };

    // Array to hold order of questions
    let questionPositions = [];
    // Generate random positions for questions which must be unique
    for (let i = 0; i < 10; i++) {
        let rand;
        do {
            rand = Math.floor(Math.random() * 10);
        } while (questionPositions.includes(rand));
        questionPositions[i] = rand;
    }

    // questionPositions[i] is a random int so question order now random
    // There must be abetter way of doing this. MAYBE ADD THE QUESTIONS TO AN ENUMERABLE AND ITERATE?
    questions[questionPositions[0] + 1] = questionOne;
    questions[questionPositions[1] + 1] = questionTwo;
    questions[questionPositions[2] + 1] = questionThree;
    questions[questionPositions[3] + 1] = questionFour;
    questions[questionPositions[4] + 1] = questionFive;
    questions[questionPositions[5] + 1] = questionSix;
    questions[questionPositions[6] + 1] = questionSeven;
    questions[questionPositions[7] + 1] = questionEight;
    questions[questionPositions[8] + 1] = questionNine;
    questions[questionPositions[9] + 1] = questionTen;

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
        let scoreHolder = document.getElementById("score");
        let score = scoreHolder.innerText;
        scoreHolder.innerText = ++score;
    }
    else {
        let incorrectHolder = document.getElementById("incorrect-count");
        let count = incorrectHolder.innerText;
        incorrectHolder.innerText = ++count;
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