const easyQuizArray = [
    {
        question: "What is the capital of Russia?",
        a: "Moscow",
        b: "Madrid",
        c: "Warsaw",
        d: "Berlin",
        answer: "a"
    },
    {
        question: "Which of these rivers is the longest?",
        a: "Amazon",
        b: "Congo",
        c: "Yangtze",
        d: "Yellow",
        answer: "a"
    },
    {
        question: "Athens is the capital of which country?",
        a: "Argentina",
        b: "Egypt",
        c: "Greece",
        d: "Kenya",
        answer: "c"
    },
    {
        question:
            "What is the name of the country that borders the United States to the north?",
        a: "Columbia",
        b: "Russia",
        c: "Canada",
        d: "Mexico",
        answer: "c"
    },
    {
        question: "What three colors do you find on the Italian flag?",
        a: "Red, White, Green",
        b: "Red, White, Yellow",
        c: "Red, White, Blue",
        d: "Red, White, Black",
        answer: "a"
    },
    {
        question: "Where is the driest place on earth?",
        a: "Al-Kufrah, Libya",
        b: "Pelican Point, Namibia",
        c: "Dry Valleys, Antarctica",
        d: "The Atacama Desert, Chile",
        answer: "d"
    },
    {
        question: "What is the largest continent?",
        a: "North America",
        b: "Asia",
        c: "Europe",
        d: "Africa",
        answer: "b"
    },
    {
        question:
            "The famous 'Leaning Tower of Pisa' is found in what country?",
        a: "Spain",
        b: "Germany ",
        c: "Italy",
        d: "France",
        answer: "c"
    },
    {
        question: "Which of the Earth's oceans is the smallest in size?",
        a: "Southern",
        b: "Indian",
        c: "Pacific",
        d: "Arctic",
        answer: "d"
    },
    {
        question: "The nation country of Slovenia is located on which continent?",
        a: "Europe",
        b: "Asia",
        c: "Africa",
        d: "South America",
        answer: "a"
    }
];

// Load all the elements present on initial page load from HTML to DOM:
const quizContainer = document.getElementById("quiz-container");
const startBtn = document.getElementById("start-btn");

// to start questions and score at 0 each time
let currentQuiz = 0;
let score = 0;


// To move from start screen to quiz questions on mouse click
startBtn.addEventListener("click", () => {
    quizContainer.classList.remove("start-screen");
    quizContainer.classList.add("quiz-container");
    generateQuiz();
});

// To generate the quiz questions
function generateQuiz() {

    // to call the first question in the quiz array
    const currentQuizData = easyQuizArray[currentQuiz];
    // to insert the first question and answer options
    quizContainer.innerHTML = `<div>
        <h2 id="question">${currentQuizData.question}</h2>
        <ul>
            <li>
                <input type="radio" name="options" id="a" class="options">
                <label for="a" class="option-text" id="a-option"></label>
            </li>
            <li>
                <input type="radio" name="options" id="b" class="options">
                <label for="b" class="option-text" id="b-option"></label>
            </li>
            <li>
                <input type="radio" name="options" id="c" class="options">
                <label for="c" class="option-text" id="c-option"></label>
            </li>
            <li>
                <input type="radio" name="options" id="d" class="options">
                <label for="d" class="option-text" id="d-option"></label>
            </li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="submit-btn">Submit</button>
        </div>`;

    // Load elements created in template literal:
    const quizQuestion = document.getElementById("question");
    const aText = document.getElementById("a-option");
    const bText = document.getElementById("b-option");
    const cText = document.getElementById("c-option");
    const dText = document.getElementById("d-option");
    // Add the question and options from the array
    quizQuestion.innerText = currentQuizData.question;
    aText.innerText = "A: " + currentQuizData.a;
    bText.innerText = "B: " + currentQuizData.b;
    cText.innerText = "C: " + currentQuizData.c;
    dText.innerText = "D: " + currentQuizData.d;
    const submitBtn = document.getElementById("submit-btn");
    // listen for click event to submit the selected option
    submitBtn.addEventListener("click", () => {
        const options = document.querySelectorAll(".options");
        const choice = getSelected();
        if (choice !== undefined) {

            if (options[choice].id == easyQuizArray[currentQuiz].answer) {
                score++;
            }
            // to only load the next question if an option has been selected for the previous question
            currentQuiz++;
            if (currentQuiz < easyQuizArray.length) {
                // Clear the selected option before the next question is loaded
                deselectOptions();
                generateQuiz();
            } else {
                // When no more questions are left load the final score & reset button
                quizContainer.innerHTML = `<h2>Congratulations! You answered ${score} /
                    ${easyQuizArray.length} questions correctly!</h2>
                    <button onclick="location.reload()" id="restart">Restart</button>`;
                quizContainer.classList.remove("quiz-container");
                quizContainer.classList.add("end-container");
                console.log(score);
            }
        } else {
            // to alert the player that they need to select an option
            alert("Please select an answer!");
        };
    });

}


// loop through to uncheck options for the next question
function deselectOptions() {
    const options = document.querySelectorAll(".options");
    options.forEach(option => {
        return option.checked == false;
    });
}

function getSelected() {
    const options = document.querySelectorAll(".options");
    // declare answer variable, then loop through the array
    let answer;
    // loop through using boolean to check if selection matches answer
    options.forEach((option, index) => {
        if (option.checked) {
            answer = index;
        }
    });
    return answer;
}

