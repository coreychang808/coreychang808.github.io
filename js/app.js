// 'use strict';

// var playGame = confirm('Want to play a guessing game about me? If, yes answer in yes/no format please');
// console.log(playGame);
    

//   var first = prompt('Am i from Seattle?').charAt(0).toUpperCase();
//   console.log(first);
//   if(first === 'Y'){
//   alert("wrong!, im from Hawaii");
//   }
//   else {
//       alert('Dang, you got it');
//   }

//   var second = prompt('Do i make sushi for a living?').charAt(0).toUpperCase();
//   console.log(second);
//   if(second === 'Y'){
//       alert('Yes i do!');
//   }
//   else {
//       alert('wrong!, been making sushi for 11 years.');
//   }

//   var third = prompt('Do i have a 3 year old son?').charAt(0).toUpperCase();
//   console.log(third);
//   if(third === 'Y'){
//       alert('false, i have the cutest little girl in the world :)');
//   }
//   else{
//       alert('correct, i have a 3 year old little girl.');
//   }


//   var fourth = prompt('Do i love to surf and spearfish?').charAt(0).toUpperCase();
//   console.log(fourth);
//   if(fourth === 'Y'){
//       alert('correct, although i cant do it anymore since i live in Seattle atm');
//   }
//   else{
//       alert('false, surfing and spearfishing is the best!');
//   }
//   var fifth = prompt('Am i super cool?').charAt(0).toUpperCase();
//   console.log(fifth)
//   if(fifth === 'Y'){
//       alert('Good answer!!');
//   }
//   else{
//       alert('false!, im the coolest :)')
//   }


// //number guessing game

// var numAnswer = 13;
// var counter = 4;
// while (counter > 0){
//     var guess = parseInt(prompt('Guess what number im thinking from 1-20, you get 4 guesses.'));
//     console.log(guess);
//     if (guess === numAnswer) alert('yay! you got it!');
//     if (guess > '13') alert('too high!');
//     if (guess < '13') alert('too low!');
//   counter --;
// }

// //multiple choice guessing game

// var stateCounter = 6;
// var countriesVisited = ['JAPAN','THAILAND','SINGAPORE',];
// console.log(countriesVisited);
// while( stateCounter > 0){
//     var countryGuess = prompt('Guess a country ive been to! You have 6 attempts.');
//     countryGuess = countryGuess.toUpperCase();
//     console.log(countryGuess);
//     if (countryGuess == countriesVisited[0] || countryGuess == countriesVisited[1] || countryGuess == countriesVisited[2] ){
//         alert('correct');
//     }
//     else{
//         alert('Guess again, they are in asia.')
//         stateCounter --;
//     }
// }

