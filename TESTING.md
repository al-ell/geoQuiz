# GeoQuiz - Testing

![markup examples](#)

Visit the deployed site: [GeoQuiz](#)

---

## CONTENTS

- [GeoQuiz - Testing](#geoquiz---testing)
  - [CONTENTS](#contents)
  - [AUTOMATED TESTING](#automated-testing)
    - [W3C Validator](#w3c-validator)
    - [Lighthouse](#lighthouse)
    - [WAVE Testing](#wave-testing)
  - [MANUAL TESTING](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Full Testing](#full-testing)
  - [JAVASCRIPT TESTING](#javascript-testing)
    - [Manual Testing](#manual-testing-1)
  - [BUGS](#bugs)
    - [Solved Bugs](#solved-bugs)
    - [Known Bugs](#known-bugs)

---

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website.

- Index Page: No errors or warnings.
- Contact Page: No errors or warnings.
- Error Page: No errors or warnings.

[Jigsaw W3C](https://jigsaw.w3.org/css-validator/) was used to validate the CSS stylesheet.

- css: No errors or warnings.

[JSLint](https://www.jslint.com/) usded to validate Javascript.

/_jslint browser:true_/ used to prevent error messages due to lack of browser

- main.js: 26 warnings.
- contact.js: 5 warnings.

---

### Lighthouse

    __Index Page Desktop__

- ![Index Page Desktop](#)

  **Index Page Mobile**

- ![Index Page Mobile](#)

  **Contact Page Desktop**

- ![Contact Page Desktop](#)

  **Contact Page Mobile**

- ![Contact Page Mobile](#)

---

### WAVE Testing

Wave Initial Results

[WAVE](http://wave.webaim.org/) (Web Accessibility Evaluation Tool)

![Start Sreen](/assets/docs/wave/wave-startScreen.png)

![Quiz Screen](/assets/docs/wave/wave-quizScreen.png)

![End Screen](/assets/docs/wave/wave-endScreen.png)

---

## MANUAL TESTING

### Testing User Stories

| Goals                 | How are they achieved? | ---- |
| --------------------- | ---------------------- | ---- |
| `First Time Visitors` |                        |
|                       |                        |      |
|                       |                        |      |
|                       |                        |      |
|                       |                        |      |
|                       |                        |
| `Returning Visitors`  |
|                       |                        |      |
|                       |                        |      |
| `Admin User`          |
|                       |                        |      |
|                       |                        |      |
|                       |                        |      |
|                       |                        |      |

---

### Full Testing

Full testing was performed using [amiresponsive](#):

Each device tested the site using the following browsers:

Huawei P30 Pro:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

| Feature                                                      | Expected Outcome                                                                   | Testing Performed       | Result                                  | Pass/Fail |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ----------------------- | --------------------------------------- | --------- |
| `Navbar`                                                     | all links tested on all pages                                                      |
| Click on contact page nav link                               | gallery page loads                                                                 | clicking on link        | taken to page                           | pass      |
| Click on index page nav link                                 | index page loads                                                                   | clicking on link        | taken to page                           | pass      |
| `Home Page`                                                  |
| Logo text sits at an appropriate height for all screen sizes | use of amiresponsive & Google dev tools to test different device and screeen sizes |
| Start button loads quiz                                      | quiz loads                                                                         | clicking on button      | quiz loads                              | pass      |
| Submit button loads next question                            | net quesiton loads                                                                 | clicking on button      | next question loads                     | pass      |
| Reload button reloads page                                   | start screen loads                                                                 | clicking on button      | start screen loads                      | pass      |
| Start button loads quiz                                      | quiz loads                                                                         | clicking on button      | quiz loads                              | pass      |
| `Error Page`                                                 |
| Homepage link in text returns to homepage                    | clicking on link                                                                   | return to index         | pass                                    |
| `Contact Page`                                               |
| Click on contact button                                      | modal loads over webpage                                                           | clicking on button      | modal loads over webpage                | pass      |
| Click on close button                                        | modal closes                                                                       | clicking on button      | modal closes                            | pass      |
| typing in input boxes                                        | words appear on screen                                                             | typing in button        | words appear on screen                  | pass      |
| typing in text box                                           | words appear on screen                                                             | typing in button        | words appear on screen                  | pass      |
| attempting to send empty form                                |                                                                                    | clicking on send button | nothing happens                         | fail      |
| `Accessability`                                              |
| title or alt text for all non-text media                     | text appears/screenreader will read out                                            | hovering over media     | text appears/screenreader will read out | pass      |

![amiresponsive result](#)

---

## JAVASCRIPT TESTING

### Manual Testing

| Feature                                                                | Testing                                                                                                                      | Image                                                                                              |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Testing link to the DOM to attempt to bring up first question in array | Use of "console.log" to pull data. Initially failed as there was an error in the link from HTML page. Functional once fixed. | <img src="/assets/documentation/testing/missingLink.png" alt="screenshot" width="50px">            |
| Successful link to DOM                                                 | Loading the first question of in the array                                                                                   | <img src="/assets/documentation/testing/connectingToDom.png" alt="screenshot" width="50px">        |
| Adding the first answer options from the array                         | linking the ID and labels to bring up the answer options                                                                     | <img src="/assets/documentation/testing/connectingOptionsToDom.png" alt="screenshot" width="50px"> |
| Testing score addition                                                 | Playing quiz untl the end so the end game div shows and checking score against tally                                         |                                                                                                    |
| Testing if the emailJS form works on the contact page                  | Sending an email                                                                                                             | <img src="/assets/documentation/testing/test-emailSuccess.png" alt="screenshot" width="50px">      |
|                                                                        |                                                                                                                              |                                                                                                    |
|                                                                        |                                                                                                                              |                                                                                                    |
|                                                                        |                                                                                                                              |                                                                                                    |
|                                                                        |                                                                                                                              |                                                                                                    |

---

## BUGS

### Solved Bugs

| Bug                                                                                           | How I solved the issue                                                                                                                                                                                                                                | Image                                                                                                |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| getting undefined insead of array index vaule                                                 | needed to convert the index value to the key. Was targeting wrong variable. Help from tutors to rectify.                                                                                                                                              | <img src="/assets/documentation/testing/bug-linkIndexToOption.png" alt="screenshot" width="50px">    |
| Next question not loading                                                                     | If statement was using strict equality instead of equality and not returning results                                                                                                                                                                  | <img src="/assets/documentation/testing/bug-chaneEqulityOperator.png" alt="screenshot" width="50px"> |
| Not all options allowing the next question to load                                            | Missing inequality value to prevent no options or allowing the wrong option to be chosen                                                                                                                                                              | <img src="/assets/documentation/testing/bug-undefined.png" alt="screenshot" width="50px">            |
| Event Listener called before element present                                                  | After converting HTML to template literal the submit button wasn't loaded until start button pressed. But the event listener and variable were being loaded before. I moved the event listener into the function and the quiz became functional again | <img src="/assets/documentation/testing/bug-eventListener.png" alt="screenshot" width="50px">        |
| "generateQuiz" function in wrong location after addition of template literal and start screen | I moved the funciton call into the event listener on the start button.                                                                                                                                                                                | <img src="/assets/documentation/testing/bug-templateLiteralAdd.png" alt="screenshot" width="50px">   |
|                                                                                               |                                                                                                                                                                                                                                                       |                                                                                                      |
|                                                                                               |                                                                                                                                                                                                                                                       |                                                                                                      |

---

### Known Bugs

| No  | Bug | Image |
| --- | --- | ----- |
