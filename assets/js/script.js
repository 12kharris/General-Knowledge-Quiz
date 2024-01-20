document.addEventListener("DOMContentLoaded", function () {
    const numOfQuestions = 10;
    const numOfOptions = 4;

    class Question {
        constructor(questionText, options) {
            this.questionText = questionText,
            this.AnswerOptions = new Array(numOfOptions);
            for (let i = 0; i < numOfOptions; i++) {
                this.AnswerOptions[i] = {option: options[i].optionText, correct: options[i].correct}
            }
        }
    }

    class Option {
        constructor(optionText, correct) {
            this.optionText = optionText,
            this.correct = correct
        }
    }

    let questionOne = new Question("QUESTION 1 TEXT", [new Option("1Option1",1), new Option("1Option2",0), new Option("1Option3",0), new Option("1Option4",0)]);
    let questionTwo = new Question("QUESTION 2 TEXT", [new Option("2Option1",1), new Option("2Option2",0), new Option("2Option3",0), new Option("2Option4",0)]);
    let questionThree = new Question("QUESTION 3 TEXT", [new Option("3Option1",1), new Option("3Option2",0), new Option("3Option3",0), new Option("3Option4",0)]);
    let questionFour = new Question("QUESTION 4 TEXT", [new Option("4Option1",1), new Option("4Option2",0), new Option("4Option3",0), new Option("4Option4",0)]);
    let questionFive = new Question("QUESTION 5 TEXT", [new Option("5Option1",1), new Option("5Option2",0), new Option("5Option3",0), new Option("5Option4",0)]);
    let questionSix = new Question("QUESTION 6 TEXT", [new Option("6Option1",1), new Option("6Option2",0), new Option("6Option3",0), new Option("6Option4",0)]);
    let questionSeven = new Question("QUESTION 7 TEXT", [new Option("7Option1",1), new Option("7Option2",0), new Option("7Option3",0), new Option("7Option4",0)]);
    let questionEight = new Question("QUESTION 8 TEXT", [new Option("8Option1",1), new Option("8Option2",0), new Option("8Option3",0), new Option("8Option4",0)]);
    let questionNine = new Question("QUESTION 9 TEXT", [new Option("9Option1",1), new Option("9Option2",0), new Option("9Option3",0), new Option("9Option4",0)]);
    let questionTen = new Question("QUESTION 10 TEXT", [new Option("10Option1",1), new Option("10Option2",0), new Option("10Option3",0), new Option("10Option4",0)]);
    
    // create an array to hold all possible questions
    let questions = new Array(numOfQuestions);

    // Array to hold order of questions
    let questionPositions = new Array(numOfQuestions);
    // Generate random positions for questions which must be unique
    for (let i = 0; i < numOfQuestions; i++) {
        let rand;
        do {
            rand = Math.floor(Math.random() * 10);
        } while (questionPositions.includes(rand));
        questionPositions[i] = rand;
    }

    // questionPositions[i] is a random int so question order now random
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
        optionText.innerText = question.AnswerOptions[i].option;
        optionCorrect.setAttribute("data-type", question.AnswerOptions[i].correct);
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