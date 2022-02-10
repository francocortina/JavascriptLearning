/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;
// Como var es una variable global
// por mas que la pongamos dentro de una funcion afecta todo
var color="skyblue"
function headingColor(x) {
  color = x;
 document.querySelector(".title").style.color = x;
}
//como el llamado lo hago antes los de abajo tmb son rojos, 
//sino serian skyblue debido a que el color iría despues y no afectaria la variable
headingColor("red");

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;


