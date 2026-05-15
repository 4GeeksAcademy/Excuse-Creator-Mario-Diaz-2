import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['My grandma', 'My dog', 'My turtle', 'My bird', 'My cat', 'My fish', 'My hamster']
let what = ['ate my homework', 'broke my leg', 'stole my phone', 'peed my clothes', 'stole my car keys']
let when = ['yesterday', 'before the class', 'this morning', 'this night']

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

window.onload = function () {
  document.getElementById("excuse").innerHTML = getRandomElement(who) + ' ' + getRandomElement(what) + ' ' + getRandomElement(when) + '.'
}
