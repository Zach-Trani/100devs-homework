//Write your pseduo code first! 

// pseduo code in comments

document.querySelector('#yell').addEventListener('click', convert)

function convert() {

// * need value in celcius
let temp = document.querySelector('#Celcius').value

// * convert from celcius to farenheit
temp = temp * 9/5 + 32
// * display in F
document.querySelector('#placeToYell').innerText = temp

}
