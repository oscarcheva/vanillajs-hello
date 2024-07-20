/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["farted", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car", "my mom"];
  let when = [
    "before the walk in the park",
    "when I was on the toilet",
    "while I was exercising",
    "during my meditation"
  ];

  var excuse =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 4)] +
    " " +
    when[Math.floor(Math.random() * 4)];

  document.getElementById("excuse").textContent = excuse;
};
