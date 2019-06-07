'use strict';



var playGame = confirm('Want to play a guessing game about me? If, yes answer in yes/no format please');
console.log(playGame);

var totalCount=0;

function question1(userAnswer){
  if(userAnswer === 'Y'){
    return alert('wrong! I\'m from Hawaii');
  }
  (totalCount++);
  return alert('Dang, you got it');
}
var first = prompt('Am I from Seattle?').charAt(0).toUpperCase();
question1(first);
console.log(first);


function question2(userAnswer){
  if(userAnswer === 'Y'){
    (totalCount++);
    return alert('Yes, I do!');
  }
  return alert('Wrong! Been making sushi for 11 years.');
}
var second = prompt('Do i make sushi for a living?').charAt(0).toUpperCase();
question2(second);



function question3(userAnswer){
  if(userAnswer === 'Y'){
    return alert('false, i have the cutest little girl in the world :)');
  }
  (totalCount++);
  return alert('correct, i have a 3 year old little girl.');
}
var third = prompt('Do i have a 3 year old son?').charAt(0).toUpperCase();
question3(third);



function question4(userAnswer) {
  if(userAnswer === 'Y') {
    (totalCount++);
    return alert('correct, although i cant do it anymore since i live in Seattle atm');
  }
  return alert('false, surfing and spearfishing is the best!');
}
var fourth = prompt('Do i love to surf and spearfish?' ).charAt(0).toUpperCase();
question4(fourth);



function question5(userAnswer) {
  if(userAnswer === 'Y') {
    (totalCount++);
    return alert('Good answer!!');
  }
  return alert('you stink');
}
var fifth = prompt('Am i super cool?' ).charAt(0).toUpperCase();
question5(fifth);
console.log(totalCount);


// number guessing game

var numAnswer = 13;
var counter = 4;

while (counter > 0){
  var guess = parseInt(prompt('Guess what number im thinking from 1-20, you get 4 guesses.'));
  console.log(guess);

  if (guess === numAnswer){
    (totalCount++);
    alert('yay! you got it!');
    break;
  }
  if (guess > '13') alert('too high!');
  if (guess < '13') alert('too low!');
  counter --;
  if (counter === 0) alert('sorry out of tries!');
  console.log(counter);
}

//multiple choice guessing game

var stateCounter = 6;
var countriesVisited = ['JAPAN','THAILAND','SINGAPORE',];
console.log(countriesVisited);

while( stateCounter > 0){
  var countryGuess = prompt('Guess a country ive been to! You have 6 attempts.');
  countryGuess = countryGuess.toUpperCase();
  console.log(countryGuess);
  // eslint-disable-next-line eqeqeq
  if (countryGuess == countriesVisited[0] || countryGuess == countriesVisited[1] || countryGuess == countriesVisited[2] ){
    (totalCount++);
    alert('correct');
    break;
  }
  else{
    alert('Guess again, they are in asia.');
    stateCounter --;
    if (stateCounter === 0) alert('Ahh sorry all out of tries!');
  }
}

console.log(totalCount);

alert('you got ' + totalCount + ' correct! thanks for playing!');
