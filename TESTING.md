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
      - [Opportunities to Improve Performance](#opportunities-to-improve-performance)
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

/*jslint browser:true */ used to prevent error messages due to lack of browser

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

##### Opportunities to Improve Performance

---

### WAVE Testing

Wave Initial Results

[WAVE](http://wave.webaim.org/) (Web Accessibility Evaluation Tool)

![Start Sreen](#)

![End Screen](#)

![Wave contrast editor 2](#)

![Final result](#)

---

## MANUAL TESTING

### Testing User Stories

| Goals                                                              | How are they achieved?             | ---- |
| ------------------------------------------------------------------ | ---------------------------------- | ---- |
| `First Time Visitors`                                              |                                    |
|                                        |                                    |      |
|                                 |                                    |      |
|                                       |                                    |      |
|                                  |                                    |      |
|                                   |                                    |
| `Returning Visitors`                                               |
|                                          |                                    |      |
|            |                                    |      |
| `Admin User`                                                       |
|          | |      |
|  |                                    |      |
|        |                                    |      |
|                          |                                    |      |

---

### Full Testing

Full testing was performed using [amiresponsive](#):

Each device tested the site using the following browsers:

| Feature  | Expected Outcome              | Testing Performed | Result | Pass/Fail |
| -------- | ----------------------------- | ----------------- | ------ | --------- |
| `Navbar` | all links tested on all pages |

| `Footer` |

| `Home Page` |

| `Contact Page` |

| `Accessability` |

![amiresponsive result](#)

---

## JAVASCRIPT TESTING

### Manual Testing

| Feature                           | Testing                                                                              | Image                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Testing link to the DOM to attempt to bring up first question in array | Use of "console.log" to pull data. Initially failed as there was an error in the link from HTML page. Functional once fixed. | <img src="/assets/documentation/testing/missingLink.png" alt="screenshot" width="50px"> |
| Successful link to DOM    | Loading the first question of in the array | <img src="/assets/documentation/testing/connectingToDom.png" alt="screenshot" width="50px"> |
| Adding the first answer options from the array | linking the ID and labels to bring up the answer options  | <img src="/assets/documentation/testing/connectingOptionsToDom.png" alt="screenshot" width="50px"> |
|        |            ||

---

## BUGS

### Solved Bugs

| Bug | How I solved the issue | Image |
| --- | ---------------------- | ----- |
| getting undefined insead of array index vaule | needed to convert the index value to the key. Was targeting wrong variable. Help from tutors to rectify. | <img src="/assets/documentation/testing/bug-linkIndexToOption.png" alt="screenshot" width="50px"> |
| Next question not loading | If statement was using strict equality instead of equality and not returning results | <img src="/assets/documentation/testing/bug-chaneEqulityOperator.png" alt="screenshot" width="50px"> |
| Not all options allowing the next question to load | Missing inequality value to prevent no options or allowing the wrong option to be chosen | <img src="/assets/documentation/testing/bug-undefined.png" alt="screenshot" width="50px"> |
|        |            ||
|        |            ||

---

### Known Bugs

| No  | Bug | Image |
| --- | --- | ----- |
