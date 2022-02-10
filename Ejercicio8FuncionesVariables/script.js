/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

let a=5;
let b=4;

console.log(`let a:${a} (${typeof a})`);
console.log(`let a:${b} (${typeof b})`);

if(a==b){
console("Match, let a and let b are the same value")

}
else{

  console.error("No match: let a and let b are not the same value")
}

function igual(a,b){
  if(a==b){console.log("a and b are the same value")}
  else{console.error("a and b are not the same value")}
};

igual(2,1);
//Creando array
const arryDom= [1,2,3,45,55,66,99];
console.log(arryDom);

//recorriendo Array
for (let index = 0; index < arryDom.length; index++) {
  const element = arryDom[index];
  console.log(element)
  
}

//funcion suma/resta/etc

function sumar(a,b){
suma=a+b
console.log(suma);
};
sumar(23,385);

//acordarse la declaración entre comillas..
let c=5;
let d=4;

console.log(`la suma de estos numeros es ${c+b}`)

// en este acordarse que ley solo esta adentro de la funcion por lo tanto me imprime purple

var defaultColor= "purple";

function setColor(){
if(h=="purple"){
  let defaultColor= "orange";
};

};
setColor();
console.log(defaultColor);




