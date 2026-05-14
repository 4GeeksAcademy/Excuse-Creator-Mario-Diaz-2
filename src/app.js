import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let who = ['My grandma', 'My dog', 'My turtle', 'My bird', 'My cat', 'My fish', 'My hamster']
  let what = ['ate my homework', 'broke my leg', 'stole my phone', 'peed my clothes', 'stole my car keys']
  let when = ['yesterday', 'before the class', 'this morning', 'this night']
  
  let randomWho = Math.floor(Math.random() * who.length)
  let randomWhat = Math.floor(Math.random() * what.length)
  let randomWhen = Math.floor(Math.random() * when.length)
  let completeExcuse = who[randomWho] + ' ' + what[randomWhat] + ' ' + when[randomWhen] + '.'
  document.getElementById('excuse').innerHTML = completeExcuse
}
