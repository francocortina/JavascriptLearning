
//tipCalculadora Display


/*Pimero creo la funcion de impresion
Segundo la funcion Formater
Tercero creo la funcion tipcalculadora donde mediante un parametro (sum,percentage,country,currency, callback[esta es la fuuncion ])
en este punto el parametro callback llama la la funcíon que se encuentra arriba de todo y le mete el objeto creado para que lo imprima
de esta forma podes recurrir a ejecutar las funciones sin necesidad de orden  */

//Función para imprimir

const printHtml = (valorimpresion)=>{
const newTable =  document.createElement("table");
newTable.innerHTML= `
<tr> <td>SUM= ${valorimpresion.sum}</td></tr>
<tr> <td>PERCENTAGE= ${valorimpresion.percentage}%</td> </tr>
<tr><td>TIP= ${valorimpresion.tip}</td> </tr>
<tr> <td>TOTAL= ${valorimpresion.total}</td></tr>
   
 
    
    
 
`

document.querySelector("main").append(newTable);


}

//Formater
const formater2 = (country,currency,value)=>{
const FormatValue= new Intl.NumberFormat(country,{
  style:"currency",
  currency:currency,
}).format(value); ;

return FormatValue;
}

//Creo el objeto
const tipCalculadora6 = (sum, percentage, country,currency, callback)=>{
let tip = sum*(percentage/100);
let total = sum + tip;

/*Aca es donde creo el objeto, dentro de la function*/
const finaltip={
sum:formater2(country,currency,sum),
percentage:percentage,
tip:formater2(country,currency,tip),
total:formater2(country,currency,total),

};
/*En este momento llamo con el parametro callback a la funcion de printHtml  */ 
callback(finaltip);
}



tipCalculadora6(24,77,"nb-NO","NOK",printHtml)





//Condicionales
import mochilaclase from "./mochila.js";
/*
      name,volumen,color,bolsillos,longLeft,longRight,tapaAbierta */
const mochila1 = new mochilaclase
(
    "Franco",
    30,
    "red",
    15,
    26,
    26,
    false

);

console.log(mochila1.name);
mochila1.Cambiar(true);
mochila1.Cambiar(false);

if(mochila1.volumen > 15 && mochila1.bolsillos>=5){
console.log("La mochila es grande")

}else{console.log("La mochila es chica")}


const newMochila1 =  document.createElement("table");
newMochila1.innerHTML=
`
<hr>
<tr> <td>Objeto=  ${mochila1.name}</td></tr>
<tr> <td>Volumen=  ${mochila1.volumen}</td> </tr>
<tr><td>Color=  ${mochila1.color}</td> </tr>
<tr> <td>Bolsillos=  ${mochila1.boolsillos}</td></tr>
<tr> <td>Longitud izquierda= ${mochila1.long.left}</td></tr>
<tr> <td>LLongitud Derecho= ${mochila1.long.right}</td></tr>
<tr> <td>Estado Tapa= ${mochila1.tapaAbierta}</td></tr>
`
document.querySelector("main").append(newMochila1);

//Ejemplo de Case, uso volumen solo po ejemplo no tiene nada que ver con age
const usedStates = ()=> {
  let age= mochila1.volumen;
  let description;

  switch (true) {
    case age < 30:
      description = "new";
      break;
    case age >= 30 && age < 365:
      description = "lightly used";
      break;
    case age >= 365 && age < 1095:
      description == "used";
      break;
    case age >= 1095:
      description = "old";
      break;
    // si ninguna de estas opciones enntre se usa el default
    default:
      console.log(`There is no description for ${age}.`);
  }
  console.log(`
Age: ${age};
Status: ${description};
`);

}

usedStates();







