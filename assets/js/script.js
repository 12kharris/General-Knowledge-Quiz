// TO DO:
/*
    1. Make it so can only submit Q once **********
    2. Add feedback for which was correct answer
    3. deselect last selected radio button
    4. STYLE PAGE!
    5. Add ability to retry
    6. Add ability to change number of Qs
    7. Add more Qs
*/

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

    let questionOne = new Question("What is the smallest prime number?", [new Option("1",0), new Option("2",1), new Option("3",0), new Option("5",0)]);
    let questionTwo = new Question("Which mountain range is the longest in the world?", [new Option("Andes",1), new Option("Himalayas",0), new Option("Rockies",0), new Option("Alps",0)]);
    let questionThree = new Question("In Greek mythology, who is the goddess of wisdom and warfare?", [new Option("Hera",0), new Option("Athena",1), new Option("Aphrodite",0), new Option("Demeter",0)]);
    let questionFour = new Question("Which chemical element is a noble gas and commonly used in colorful neon signs?", [new Option("Helium",0), new Option("Neon",0), new Option("Argon",0), new Option("Krypton",1)]);
    let questionFive = new Question("What is the largest desert in the world by area?", [new Option("Sahara Desert",0), new Option("Antarctic Desert",1), new Option("Arabian Desert",0), new Option("Gobi Desert",0)]);
    let questionSix = new Question("Who is the author of the science fiction novel \"Neuromancer\"?", [new Option("Isaac Asimov",0), new Option("Arthur C. Clarke",0), new Option("William Gibson",1), new Option("Philip K. Dick",0)]);
    let questionSeven = new Question("Which Renaissance artist sculpted the statue of David?", [new Option("Michelangelo",1), new Option("Leonardo da Vinci",0), new Option("Raphael",0), new Option("Donatello",0)]);
    let questionEight = new Question("What is the main structural protein found in the skin, hair, and nails of animals?", [new Option("Collagen",0), new Option("Keratin",1), new Option("Elastin",0), new Option("Myosin",0)]);
    let questionNine = new Question("Which ancient wonder was located in the city of Babylon?", [new Option("Hanging Gardens",1), new Option("Statue of Zeus at Olympia",0), new Option("Temple of Artemis at Ephesus",0), new Option("Mausoleum at Halicarnassus",0)]);
    let questionTen = new Question("In computer programming, what does the acronym \"SQL\" stand for?", [new Option("Simple Query Language",0), new Option("Structured Question Language",0), new Option("Standard Query Language",1), new Option("Sequential Query Logic",0)]);
    
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
    questionElement.innerText = `${questionNumber}. ` + question.questionText;

    let options = document.getElementsByClassName("options");
    for (let option of options) {
        option.classList.remove("answer-grey");
        option.classList.remove("answer-red");
        option.classList.remove("answer-green");
    }

    // Loop through the different options, set the text of their labels and whether they are correct
    for (let i = 0; i < options.length; i++) {
        let optionText = options[i].getElementsByTagName("label")[0];
        let option = options[i].getElementsByClassName("option")[0];
        optionText.innerText = question.AnswerOptions[i].option;
        option.setAttribute("data-type", question.AnswerOptions[i].correct);
        option.disabled = false;
        option.checked = false;
    }
}

/**
 * Function to check if answer is correct or not and increment question number and score
 */
function checkAnswer(questionNumber, questions) {

    // Check if there are any more questions and if the next question button hasn't already been created
    if (questionNumber < questions.length && document.getElementById("btn-nextQ") === null) {
        // get the selected option
        let options = document.getElementsByClassName("option");
        let selectedOption;
        for (let option of options) {
            if (option.checked) {
                selectedOption = option;
            }
            option.disabled = true;
        }

        if (selectedOption.getAttribute("data-type") === "1") {
            let scoreHolder = document.getElementById("score");
            let score = scoreHolder.innerText;
            scoreHolder.innerText = ++score;

            // Grey out other options and highlight in green the correct answer. Make the radio buttons not selectable
            for (let option of options) {
                let holder = option.parentNode;
                if (option.getAttribute("data-type") === "1") {
                    holder.classList.add("answer-green");
                }
                else {
                    holder.classList.add("answer-grey");
                }
            }
        }
        else {
            let incorrectHolder = document.getElementById("incorrect-count");
            let count = incorrectHolder.innerText;
            incorrectHolder.innerText = ++count;

            for (let option of options) {
                let holder = option.parentNode;
                if (option.getAttribute("data-type") === "1") {
                    holder.classList.add("answer-green");
                }
                else if (option.checked){
                    holder.classList.add("answer-red");
                }
                else {
                    holder.classList.add("answer-grey");
                }
            }
        }
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