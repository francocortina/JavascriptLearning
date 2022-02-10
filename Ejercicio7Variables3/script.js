/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;
// Uso la variable let para arreglar el problema de var
var color="skyblue"
function headingColor(x) {
  let color = x;
 document.querySelector(".title").style.color = x;
}

headingColor("red");

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;


