// grab DOM elements from HTML
const userInput = document.getElementById('user-input'); 
const submitButton = document.getElementById('submit-button'); 
const userOutput = document.getElementById('user-output'); 
const audio = document.getElementById('audio');
// const pageOne = document.getElementById('page-one'); 
// const pageTwo = document.getElementById('page-two'); 


// set state: create function 
import { answers } from './answers.js'; 

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max); 
}; 

let randomIndex = getRandomNumber(answers.length); 
let randomAnswer = answers[randomIndex]; 


// add event listener
submitButton.addEventListener('click', () => {
    if (userInput.value === ''){
        alert('Uhoh, please type your question!');
    } else {
        audio.play(); 
        userInput.value = '';
        userOutput.textContent = randomAnswer;
        randomIndex = getRandomNumber(answers.length);
        randomAnswer = answers[randomIndex]; 
    }
});