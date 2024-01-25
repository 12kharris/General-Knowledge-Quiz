const numOfQuestions = 10;
const numOfOptions = 4;

class Question {
    constructor(questionText, options, infoText, infoImage, infoImageAlt, sourceLink, sourceAriaLabel) {
        this.questionText = questionText,
        this.AnswerOptions = new Array(numOfOptions);
        for (let i = 0; i < numOfOptions; i++) {
            this.AnswerOptions[i] = {option: options[i].optionText, correct: options[i].correct}
        }
        this.infoText = infoText;
        this.infoImage = infoImage;
        this.infoImageAlt = infoImageAlt;
        this.sourceLink = sourceLink;
        this.sourceAriaLabel = sourceAriaLabel;
    }
}

class Option {
    constructor(optionText, correct) {
        this.optionText = optionText,
        this.correct = correct
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // create questions
    let questionOne = new Question("What is the smallest prime number?" 
                                    ,[new Option("1",0), new Option("2",1), new Option("3",0), new Option("5",0)]
                                    ,"A prime number (or prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. As such, 2 is the smallest prime number"
                                    ,"assets/images/prime-numbers.webp"
                                    ,"Image of prime numbers"
                                    ,"https://en.wikipedia.org/wiki/List_of_prime_numbers"
                                    ,"Navigate to Wikipedia prime numbers (opens in new tab)"
                                );
    let questionTwo = new Question("Which mountain range is the longest in the world?"
                                    ,[new Option("Andes",1), new Option("Himalayas",0), new Option("Rockies",0), new Option("Alps",0)]
                                    ,"The world's longest above-water mountain range is the Andes, about 7,000 km (4,300 mi) long. The range stretches from north to south through seven countries in South America, along the west coast of the continent: Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina."
                                    ,"assets/images/andes.webp"
                                    ,"Image of Andes mountain range"
                                    ,"https://en.wikipedia.org/wiki/List_of_longest_mountain_chains_on_Earth#:~:text=The%20world's%20longest%20above%2Dwater,Bolivia%2C%20Chile%2C%20and%20Argentina."
                                    ,"Navigate to Wikipedia longest mountain ranges (opens in new tab)"
                                );
    let questionThree = new Question("In Greek mythology, who is the goddess of wisdom and warfare?"
                                    ,[new Option("Hera",0), new Option("Athena",1), new Option("Aphrodite",0), new Option("Demeter",0)]
                                    ,"Athena or Athene, often given the epithet Pallas, is an ancient Greek goddess associated with wisdom, warfare, and handicraft who was later syncretized with the Roman goddess Minerva. Athena was regarded as the patron and protectress of various cities across Greece, particularly the city of Athens, from which she most likely received her name. The Parthenon on the Acropolis of Athens is dedicated to her."
                                    ,"assets/images/athena.webp"
                                    ,"Image of Athena statue"
                                    ,"https://en.wikipedia.org/wiki/Athena"
                                    ,"Navigate to Wikipedia Athena (opens in new tab)"
                                );
    let questionFour = new Question("Which chemical element is a noble gas and commonly used in colorful neon signs?"
                                    ,[new Option("Helium",0), new Option("Neon",0), new Option("Argon",0), new Option("Krypton",1)]
                                    ,"Krypton is a chemical element; it has symbol Kr and atomic number 36. It is a colorless, odorless, tasteless noble gas that occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps"
                                    ,"assets/images/Krypton_discharge_tube.webp"
                                    ,"Image of krypton tube"
                                    ,"https://en.wikipedia.org/wiki/Krypton"
                                    ,"Navigate to Wikipedia krypton (opens in new tab)"
                                );
    let questionFive = new Question("What is the largest desert in the world by area?"
                                    ,[new Option("Sahara Desert",0), new Option("Antarctic Desert",1), new Option("Arabian Desert",0), new Option("Gobi Desert",0)]
                                    ,"Antarctica is, on average, the coldest, driest, and windiest of the continents, and it has the highest average elevation. It is mainly a polar desert, with annual precipitation of over 200 mm (8 in) along the coast and far less inland"
                                    ,"assets/images/antarctica.webp"
                                    ,"Image of Antarctica"
                                    ,"https://en.wikipedia.org/wiki/Antarctica"
                                    ,"Navigate to Wikipedia Antarctica (opens in new tab)"
                                );
    let questionSix = new Question("Who is the author of the science fiction novel \"Neuromancer\"?"
                                    ,[new Option("Isaac Asimov",0), new Option("Arthur C. Clarke",0), new Option("William Gibson",1), new Option("Philip K. Dick",0)]
                                    ,"Neuromancer is a 1984 science fiction novel by American-Canadian writer William Gibson and it is considered to be one of the earliest and best-known works in the cyberpunk genre. Set in the future, the novel follows Henry Case, a washed-up hacker hired for one last job, which brings him in contact with a powerful artificial intelligence."
                                    ,"assets/images/neuromancer.webp"
                                    ,"Image of Neuromancer cover"
                                    ,"https://en.wikipedia.org/wiki/Neuromancer"
                                    ,"Navigate to Wikipedia Neuromancer (opens in new tab)"
                                );
    let questionSeven = new Question("What is the 5th farthest planet from the sun?"
                                    ,[new Option("Jupiter",1), new Option("Mars",0), new Option("Earth",0), new Option("Saturn",0)]
                                    ,"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter has an orbital period of 11.86 years."
                                    ,"assets/images/jupiter.webp"
                                    ,"Image of Jupiter"
                                    ,"https://en.wikipedia.org/wiki/Jupiter"
                                    ,"Navigate to Wikipedia Jupiter (opens in new tab)"
                                );
    let questionEight = new Question("What is the main structural protein found in the skin, hair, and nails of animals?"
                                    ,[new Option("Collagen",0), new Option("Keratin",1), new Option("Elastin",0), new Option("Myosin",0)]
                                    ,"Keratin is one of a family of structural fibrous proteins. It is the key structural material making up scales, hair, nails, feathers, horns, claws, hooves, and the outer layer of skin among vertebrates."
                                    ,"assets/images/keratin.webp"
                                    ,"Image of keratin protein"
                                    ,"https://en.wikipedia.org/wiki/Keratin"
                                    ,"Navigate to Wikipedia Keratin (opens in new tab)"
                                );
    let questionNine = new Question("Which ancient wonder was located in the city of Babylon?"
                                    ,[new Option("Hanging Gardens",1), new Option("Statue of Zeus at Olympia",0), new Option("Temple of Artemis at Ephesus",0), new Option("Mausoleum at Halicarnassus",0)]
                                    ,"The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World listed by Hellenic culture. They were described as a remarkable feat of engineering with an ascending series of tiered gardens containing a wide variety of trees, shrubs, and vines, resembling a large green mountain constructed of mud bricks."
                                    ,"assets/images/hanging gardens.webp"
                                    ,"Image of painting of Hanging Gardens"
                                    ,"https://en.wikipedia.org/wiki/Hanging_Gardens_of_Babylon"
                                    ,"Navigate to Wikipedia Hanging gardens (opens in new tab)"
                                );
    let questionTen = new Question("In computer programming, what does the acronym \"SQL\" stand for?"
                                    ,[new Option("Simple Query Language",0), new Option("Structured Query Language",1), new Option("Standard Query Language",0), new Option("Sequential Query Language",0)]
                                    ,"Structured Query Language (SQL) (sometimes pronounced \"sequel\" for historical reasons) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS)"
                                    ,"assets/images/SQL.webp"
                                    ,"Image of SQL code"
                                    ,"https://en.wikipedia.org/wiki/SQL"
                                    ,"Navigate to Wikipedia Athena (opens in new tab)"
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
            if (!holder.classList.contains("answer-grey") || !holder.classList.contains("answer-red") || !holder.classList.contains("answer-green")) {
                holder.getElementsByClassName("option")[0].checked = true;
                console.log("CLICKED");
                // re-enable the submit button when option is chosen
                document.getElementById("submit-button").disabled = false;
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
    // hide the finished text
    document.getElementById("finished").style.display = "none";

    generateQuestion(questionNumber, questions);
});



/**
 * Generates a question from the available question pool and displays it on the page
 */
function generateQuestion(questionNumber, questions) {
    // If the next question button has been created, remove it
    let nextQuestionButton = document.getElementById("nextQ-button");
    if (nextQuestionButton !== null) {
        nextQuestionButton.remove();
    }

    // Hide the info section for the answer and scroll message
    document.getElementById("info-section").style.display = "none";
    document.getElementById("scroll-message").style.display = "none";

    // disable submit button until option is chosen
    document.getElementById("submit-button").disabled = true;

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

    // Ready content for answer info
    let image = document.getElementById("question-image");
    image.src = question.infoImage;
    image.alt = question.infoImageAlt;

    let infoText = document.getElementById("question-info");
    infoText.innerText = question.infoText;

    let source = document.getElementById("source-link");
    source.href = question.sourceLink;
    source.ariaLabel = question.sourceAriaLabel;
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
        if (questionNumber <= numOfQuestions) {
            createNextQuestionButton(questionNumber, questions);
        }
        else {
            createFinishButton();
        }
        
        // unhide the info section for the answer and the scroll message
        document.getElementById("info-section").style.display = "";
        document.getElementById("scroll-message").style.display = "";

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

/**
 * Function to create the finish button which calls displayFinishPage()
 */
function createFinishButton() {
    let holder = document.getElementById("main-buttons-holder");
    let nextQuestionButton = document.createElement("button");
    nextQuestionButton.id = "finish-button";
    nextQuestionButton.classList.add("main-buttons");
    nextQuestionButton.innerText = "Finish";
    holder.appendChild(nextQuestionButton);
    nextQuestionButton.addEventListener("click", function () {
        let score = document.getElementById("score").innerText;
        displayFinishPage(score);
    });
}

/**
 * Function to display the final finished page after all questions have been answered
 */
function displayFinishPage(score) {
    document.getElementById("finished").style.display = "";
    document.getElementById("final-score").innerText = score;
    document.getElementById("numOfQs").innerText = numOfQuestions;

    // hide everything else
    document.getElementById("question-holder").style.display = "none";
    document.getElementById("button-section").style.display = "none";
    document.getElementById("score-section").style.display = "none";
    document.getElementById("info-section").style.display = "none";
    
    let options = document.getElementsByClassName("options");
    for (let option of options) {
        option.style.display = "none";
    }
}