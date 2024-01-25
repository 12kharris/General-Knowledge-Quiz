# General Knowledge Quiz

General Knowledge Quiz is a one page site which provides a short quiz to users with no specific subject area as the focus. The site is targeted towards those who desire a short bit of fun and people of all ages. The site is fully responsive and provides feedback to the user on their answer selection and also provides additional info about the question when the asnwer is revealed, including a link to where they can read more about the topic.

![Responsive Mockup](https://github.com/12kharris/General-Knowledge-Quiz/blob/main/README-Images/GK%20responsive.png?raw=true)

## Features 

### Existing Features

- __The Question and Option Area__

  - The main feature of the page and the section which the user will interact with the most is the question and option area. The current question and question number is displayed at the top and 4 possible answers below. 
  - The questions are displayed in a random order
  - Each answer has a unique colour and provides visual feedback to the user when it is hovered over or clicked so it is always clear to the user which option they have selected. 
  - When a user has submitted their answer, the answer section will change colour to indicate to the user if they selected the correct answer. If they did, their answer will display green and all other answers faded grey. If not, their selected answer will be highlighted red and the correct answer in green.

![label](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20Q%20Area.png?raw=true)
![label](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20Q%20highlighted.png?raw=true)
![label](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20feedback.png?raw=true)

- __The Button Area__

  - This section provides the buttons to submit answers, move onto the next question and finally finish the quiz.
  - All buttons will only be displayed and enabled when it makes sense to do so. For example, the submit button is disabled if an answer has not been chosen and when the correct answer has been revealed.
  - The 'Finish' button will only display at the end of the quiz and when clicked will alter the page to display a final score.

![Game](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20buttons.png?raw=true)
![Game](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20button%20finished.png?raw=true)

- __The Score Area__

  - This section tracks the user's correct answers and incorrect answers so they can keep track as they play

![Score](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20score%20section.png?raw=true)

- __The Info Area__

  - This section only displays when the correct answer has been revealed. 
  - In this section, additional information about the correct answer is displayed and a releveant picture.
  - There is also a link to the source of the information which the user can click for additional reading. 

![Info](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20Info%20Area.png?raw=true)

- __The Finished Screen__

  - This is the final page show to a user after completing all questions. It shows their fina score and directions on how to replay the quiz.

![Finished](https://github.com/12kharris/General-Knowledge-Quiz/blob/123839a280e87b0ec9752d65e3780f8a4cdbc752/README-Images/GK%20finished%20screen.png?raw=true)

### Features Left to Implement

- The current quiz is only 10 questions long. The ability to choose how many questions to make the quiz would be a nice feature.
- Randomising the order of the options could also be implemented
- A retry button rather than directing the user to refresh the page would also be a nice quality of life feature.
- Additional features such as difficulty or allowing for subject area quizes would also be a good feature to add.

## Testing 

The only remaining bug is where if you select an asnwer which is either red or green when the answers are in feedback state, the submit button style will return to default but the button does not function.

All links open in a seperate tab and all images display correctly. An interesting bug when testing was the question number incrementing when generating the question but not for when checking the answer. For example, the quiz could display questions 1-3 but when checking the answer, the checkAnswer() function was receiving a question number of 1. As such, incrementing the question is done as an input when calling the checkAnswer() function rather than inside the function (e.g. checkAnswer(++questionNumber)). This lead to a bug of being able to click submit and increment the question number when no answer had been selected. This was fixed by disabling the submit button until an answer has been selected.

Hidden radio buttons with the same name for the answer options means only 1 option can be selected without needing to use javascript to achieve this with buttons or divs with click events.

When the answer is show, all answer options are disabled so that they become static and their styles won't change if the user attempts to interact with them.

Extensive use of flexboxes allows the site to display differently for varying screen sizes and as such, few media queries were needed. The info section on smaller screens changes to a column flexbox so the image and text don't appear next to each other unlike larger screen sizes.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2F12kharris.github.io%2FGeneral-Knowledge-Quiz%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2F12kharris.github.io%2FGeneral-Knowledge-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - Some warnings were found but the vast majority were due to formatting when passing through the official [Jshint validator](https://jshint.com/)
    - There are 12 functions in this file.
    - Function with the largest signature take 7 arguments, while the median is 0.5.
    - Largest function has 35 statements in it, while the median is 7.5.
    - The most complex function has a cyclomatic complexity value of 12 while the median is 1.5
 

## Deployment

- The site was deployed to GitHub pages.

The live link can be found here - https://12kharris.github.io/General-Knowledge-Quiz/


## Credits 

The use of data types for tracking which answer is correct was inspired from the Code Institute Love Maths walkthrough project. 
The use of conditions in CSS styles was taken from https://stackoverflow.com/questions/26754497/css-disable-hover-effect. 

The additional info for each question was taken from Wikipedia and all info sections have a link to the specific source provided.

Some images were taken from the royalty free website Pixabay https://pixabay.com/ . 
The remaining images were taken from the following sites:
- https://stock.adobe.com/uk/search?k=babylon+garden 
- https://www.istockphoto.com/search/2/image-film?phrase=keratin+protein 
- https://www.reddit.com/r/Cyberpunk/comments/f0yxqt/neuromancer_by_william_gibson_pioneer_of_cyberpunk/ 
- https://en.wikipedia.org/wiki/Krypton 
- https://classicalwisdom.com/mythology/athena-in-ancient-literature/ 




