//1 solo imprime resultados
const tipCalculadora= () =>{

let sum = 29.95;
let percentage =  18;
let tip= sum * (percentage/100);
let total= sum + tip;
console.log(`
Sum before tip= ${sum}
Tip percentage= ${percentage}
Tip= ${tip}
Total= ${total}`);

};

tipCalculadora();

//2 con parametros

const tipCalculadora2 = (sum,percentage)=>{
  let tip= sum * (percentage/100);
  let total= sum + tip;
  console.log(`
Sum before tip= ${sum}
Tip percentage= ${percentage}
Tip= ${tip}
Total= ${total}
  `);
};

tipCalculadora2(29.95,18);

//3 con parametros,con simbolo, con booleano  y estructura de control 
const tipCalculadora3 = (sum,percentage,currency,prefix)=>{
  let tip= sum * (percentage/100);
  let total= sum + tip;
  if(prefix){
    console.log(`
 Sum before tip=  ${currency}${sum}
 Tip percentage=  ${percentage}"%"
 Tip=  ${currency}${tip}
 Total=  ${currency}${total}
      `);
  }else{
  console.log(`
Sum before tip= ${sum}
Tip percentage= ${percentage}
Tip = ${tip}
Total = ${total}
  `);}
};

tipCalculadora3(29.95,18,"$",true);





//4  En este paso vamos a ver la  forma correcta de imprimir un parametro
   //dependiendo que sea en cuanto cada país  y formato


//Primero hacemos la función formater para el traspaso de los valores
const formatter = (value)=>{
//los obtenes de la pagina, copias y pegas el formato que queres
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format

let formatoValue= new Intl.NumberFormat("en-CA",{
  style:"currency",
  currency:"CAD",
}).format(value);

  return formatoValue;


}

const tipCalculadora4 = (sum,percentage)=>{
  let tip= sum * (percentage/100);
  let total= sum + tip;
  console.log(`
Sum before tip= ${formatter(sum)}
Tip percentage= ${percentage}
Tip= ${formatter(tip)}
Total= ${formatter(total)}
  `);
};

//Este es de repaso pero lo hago passandole los datos  del formatear.

const formatear = (country,currency,value) =>
{
let FormatValue=new Intl.NumberFormat(country,{
  style:"currency",
  currency:currency,
}).format(value); ;
 return FormatValue;
}


const tipCalculadora5 = (country,currency,sum,percentage)=> {
let tip = sum*(percentage/100);
let total= sum + tip;

console.log(
 `Sum before tip=  ${formatear(country,currency,sum)}
  Tip percentage= ${percentage}
  Tip= ${formatear(country,currency,tip)}
  Total=${formatear(country,currency,total)} 
  
  `
)
}


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




