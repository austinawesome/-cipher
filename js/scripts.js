var sentence = prompt("Please enter a sentence.");
//alert(sentence);
console.log(sentence);


var strInput = prompt("Please enter a sentence.");
console.log(strInput);

function getFirstLetter(sentence){
return sentence[0]; //this is calling char array value of sentence
};

function getLastLetter(sentence){return sentence[sentence.length-1]};

function getMiddleLetter(sentence){return sentence[Math.floor((sentence.length-1)/2)]}

function reverseIt(sentence){return sentence.split("").reverse().join("")}
alert(reverseIt(strInput))

function capitalizedFirstAndLast(sentence){
  return getFirstLetter(sentence).concat(getLastLetter(sentence)).toUpperCase();
}
alert(capitalizedFirstAndLast(strInput));
