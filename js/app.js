'use strict';

var playGame = confirm('Want to play a guessing game about me? If, yes answer in yes/no format please');
console.log(playGame);


  var first = prompt('Am i from Seattle?').toUpperCase();
  console.log(first);
  if(first === 'YES'){
  alert("wrong!, im from Hawaii");
  }
  else {
      alert('Dang, you got it');
  }

  var second = prompt('Do i make sushi for a living?').toUpperCase();
  console.log(second);
  if(second === 'YES'){
      alert('Yes i do!');
  }
  else {
      alert('wrong!, been making sushi for 11 years.');
  }

  var third = prompt('Do i have a 3 year old son?').toUpperCase();
  console.log(third);
  if(third === 'YES'){
      alert('false, i have the cutest little girl in the world :)');
  }
  else{
      alert('correct, i have a 3 year old little girl.');
  }


  var fourth = prompt('Do i love to surf and spearfish?').toUpperCase();
  console.log(fourth);
  if(fourth === 'YES'){
      alert('correct, although i cant do it anymore since i live in Seattle atm');
  }
  else{
      alert('false, surfing and spearfishing is the best!');
  }
  var fifth = prompt('Am i super cool?').toUpperCase();
  console.log(fifth)
  if(fifth === 'YES'){
      alert('Good answer!!');
  }
  else{
      alert('false!, im the coolest :)')
  }
