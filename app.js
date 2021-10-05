const colors = ['red', 'white', 'blue'];

// // // to generate a random color from the array
// // // generate a random number between 0 and 2
// // // in other words generate a random index 
// // const randomIndex = Math.floor(Math.random() * colors.length); 
// // console.log(colors[randomIndex]); 

//turn this into a function
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max); 
}; 

const randomIndex = getRandomNumber(colors.length); 
console.log(colors[randomIndex]);

import { answers } from './answers.js'; 

const randomAnswer = getRandomNumber(answers.length); 
console.log(answers[randomAnswer]); 

// // in the HTML, set a <p> tag with id of answer.
// const answer = document.getElementById('answer); 
// answer.textContent = answers[randomAnswer]; 