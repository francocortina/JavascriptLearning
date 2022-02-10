/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */
//usamos const solo si no vamos a cambiar la variable
const color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;



function headingColor(x) {
  let color = x;
 document.querySelector(".title").style.color = x;
}

headingColor("red");

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

//Object:

const ObjectDemo={
  dance:"Mambo",
  number:5,

}
console.log(ObjectDemo)


//array
const arrayDemo=["tango","foxtrot","waltz","rumba","bolero"];
console.log("Array",arrayDemo)
