// TO DO:
/*
    4. Add images and knowledge for feedback - HIGH PRIORITY 
    5. Add ability to retry and start page - HIGH PRIORITY
    6. Add ability to change number of Qs - LOW PRIORITY
    7. Add more Qs - LOW PRIORITY
*/

document.addEventListener("DOMContentLoaded", function () {
    const numOfQuestions = 10;
    const numOfOptions = 4;

    class Question {
        constructor(questionText, options/*, infoText, infoImage*/) {
            this.questionText = questionText,
            this.AnswerOptions = new Array(numOfOptions);
            for (let i = 0; i < numOfOptions; i++) {
                this.AnswerOptions[i] = {option: options[i].optionText, correct: options[i].correct}
            }
            /*this.infoText = infoText;
            this.infoImage = infoImage;*/
        }
    }

    class Option {
        constructor(optionText, correct) {
            this.optionText = optionText,
            this.correct = correct
        }
    }

    let questionOne = new Question("What is the smallest prime number?" 
                                    ,[new Option("1",0), new Option("2",1), new Option("3",0), new Option("5",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionTwo = new Question("Which mountain range is the longest in the world?"
                                    ,[new Option("Andes",1), new Option("Himalayas",0), new Option("Rockies",0), new Option("Alps",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionThree = new Question("In Greek mythology, who is the goddess of wisdom and warfare?"
                                    ,[new Option("Hera",0), new Option("Athena",1), new Option("Aphrodite",0), new Option("Demeter",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionFour = new Question("Which chemical element is a noble gas and commonly used in colorful neon signs?"
                                    ,[new Option("Helium",0), new Option("Neon",0), new Option("Argon",0), new Option("Krypton",1)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionFive = new Question("What is the largest desert in the world by area?"
                                    ,[new Option("Sahara Desert",0), new Option("Antarctic Desert",1), new Option("Arabian Desert",0), new Option("Gobi Desert",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionSix = new Question("Who is the author of the science fiction novel \"Neuromancer\"?"
                                    ,[new Option("Isaac Asimov",0), new Option("Arthur C. Clarke",0), new Option("William Gibson",1), new Option("Philip K. Dick",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionSeven = new Question("Which Renaissance artist sculpted the statue of David?"
                                    ,[new Option("Michelangelo",1), new Option("Leonardo da Vinci",0), new Option("Raphael",0), new Option("Donatello",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionEight = new Question("What is the main structural protein found in the skin, hair, and nails of animals?"
                                    ,[new Option("Collagen",0), new Option("Keratin",1), new Option("Elastin",0), new Option("Myosin",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionNine = new Question("Which ancient wonder was located in the city of Babylon?"
                                    ,[new Option("Hanging Gardens",1), new Option("Statue of Zeus at Olympia",0), new Option("Temple of Artemis at Ephesus",0), new Option("Mausoleum at Halicarnassus",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    let questionTen = new Question("In computer programming, what does the acronym \"SQL\" stand for?"
                                    ,[new Option("Simple Query Language",0), new Option("Structured Question Language",0), new Option("Standard Query Language",1), new Option("Sequential Query Logic",0)]
                                    /*,"INFO 1 TEXT"
                                    ,"Q1 SRC"*/
                                );
    
    // create an array to hold all possible questions
    let questions = new Array(numOfQuestions);

    // Array to hold order of questions
    let questionPositions = new Array(numOfQuestions);
    // Generate random positions for questions which must be unique
    // There is a possibility for an infinite loop but the chances are practically 0
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

    let optionHolders = document.getElementsByClassName("options");
    for (let holder of optionHolders)
    {
        holder.addEventListener("click", function() {
            // if the options are in the feedback state, do not add style when clicked
            if (!holder.classList.contains("answer-grey", "answer-red", "answer-green")) {
                holder.getElementsByClassName("option")[0].checked = true;
                let options = document.getElementsByClassName("options");

                // remove style class for any options which have the checked style
                for (let option of options) {
                    let id = option.id;
                    option.classList.remove(`${id}-checked`);
                }
                // add the checked style to the clicked option
                holder.classList.add(`${holder.id}-checked`);
            }
        });
    }

    generateQuestion(questionNumber, questions);
});



/**
 * Generates a question from the available questions and displays it on the page
 */
function generateQuestion(questionNumber, questions) {

    // If the next question button has been created, remove it
    let nextQuestionButton = document.getElementById("nextQ-button");
    if (nextQuestionButton !== null) {
        nextQuestionButton.remove();
    }

    // re-enable the submit button
    document.getElementById("submit-button").disabled = false;

    let question = questions[questionNumber];
    let questionElement = document.getElementById("question");
    questionElement.innerText = `${questionNumber}. ` + question.questionText;

    // remove answer feedback styles
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
    if (questionNumber <= questions.length && document.getElementById("nextQ-button") === null) {
        // get the selected option
        let options = document.getElementsByClassName("option");
        let selectedOpion;

        for (let option of options) {
            if (option.checked) {
                selectedOpion = option;
            }
        }

        // if submit is pressed but no option selected, return
        if (selectedOpion === undefined) {
            return;
        }

        document.getElementById("submit-button").disabled = true;

        // loop through the possible options and provide colour feedback for selected answer. If correct increment score
        for (let option of options) {
            let holder = option.parentNode;
            holder.classList.remove(`${holder.id}-checked`);

            if (option.getAttribute("data-type") === "1") {
                if (option.checked) {
                    let scoreHolder = document.getElementById("score");
                    let score = scoreHolder.innerText;
                    scoreHolder.innerText = ++score;
                }
                
                holder.classList.add("answer-green");
            }
            else if (option.getAttribute("data-type") === "0" && option.checked) {
                holder.classList.add("answer-red");

                let incorrectHolder = document.getElementById("incorrect-count");
                let count = incorrectHolder.innerText;
                incorrectHolder.innerText = ++count;
            }
            else {
                holder.classList.add("answer-grey");
            }
            option.disabled = true;
        }

        // could add condition here to either generate next Q or give a total?
        createNextQuestionButton(questionNumber, questions);
    }
}

/**
 * Function which creates the button to move onto the next question
 */
function createNextQuestionButton(questionNumber, questions) {
    let holder = document.getElementById("main-buttons-holder");
    let nextQuestionButton = document.createElement("button");
    nextQuestionButton.id = "nextQ-button";
    nextQuestionButton.classList.add("main-buttons");
    nextQuestionButton.innerText = "Next Question";
    holder.appendChild(nextQuestionButton);
    nextQuestionButton.addEventListener("click", function () {
        generateQuestion(questionNumber, questions);
    });
}