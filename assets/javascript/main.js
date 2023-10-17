
document.addEventListener("DOMContentLoaded", function () {
    generateQuiz();
});


const easyQuizArray = [
    {
        question: "What is the capital of Russia?",
        a: "Moscow",
        b: "Madrid",
        c: "Warsaw",
        d: "Berlin",
        correct: "a",
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
        question: "What is the name of the country that borders the United States to the north?",
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
        a: "Red, White, Green",
        b: "Red, White, Yellow",
        c: "Red, White, Blue",
        d: "Red, White, Black",
        answer: "a"
    },
    {
        question: "What is the largest continent",
        a: "North America",
        b: "Asia",
        c: "Europe",
        d: "Africa",
        answer: "b"
    },
    {
        question: "The famous 'Leaning Tower of Pisa' is found in what country?",
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
        question: "The nation state of Slovenia is located on which continent?",
        a: "Europe",
        b: "Asia",
        c: "Africa",
        d: "South America",
    },
];


// Load all the elements from HTML to DOM:
const quizContainer = document.getElementById("quiz-container");
const options = document.getElementsByClassName("options");
const quizQuestion = document.getElementById("question");
const aText = document.getElementById('a');
const bText = document.getElementById('b');
const cText = document.getElementById('c');
const dText = document.getElementById('d');
const submitBtn = document.getElementById('submit-btn');


// to start questions and score at 0 each time
let currentQuiz = 0;
let score = 0;


// To generate the quiz


function generateQuiz() {
    // to call the first question in the quiz array 
    const currentQuizData = easyQuizArray[currentQuiz];
    // to insert the first question
    quizQuestion.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;

}
