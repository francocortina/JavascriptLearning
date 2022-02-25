
const arrayprueba=["Franco","Hernesto","Manuel", "Micaela"];
console.log(arrayprueba);


arrayprueba.forEach(function(item){

  item=item;
  console.log(item);
})

for (let index = 0; index < arrayprueba.length; index++) {
  const element = arrayprueba[index];
  console.log(element);
  
}


Object2 ={
name:"franco",
age:24,
email:"franco.cug@gmail.com",
universidad:"UTN-FRLP"

};

console.log("MAIL:",Object2.email)

//creo el Objeto
const Person={
  name:"Franco",
  apellido:"Cortina Ugolini",
  email:"franco.cug@gmail.com",
  edad:24,


};



//Creo una  funcion que pase un objeto y lo descomponga en cuanto al objeto

// Si  quisiera pasar 2 parametros en la arrow functionn lo hago igual
//pero con los parentesis ej (currentPerson, current Facultad)=>
//NO se pueden usar si tenes declarada funciones en un objeto
const addPerson= currentPerson =>{
  const newArticle = document.createElement("article");
  
  newArticle.innerHTML= `
  <h1>Nombre:${currentPerson.name}</h1>
<ul class="container letra">
<li>${currentPerson.apellido}</li>
<li>${currentPerson.email}</li>
<li>${currentPerson.edad}</li>

</ul>
  
  `
  return newArticle;
  
};


const Facultad1 ={
  name:"Universidad Tecnológica Nacional",
  alias:"UTN-frlp",
  provincia:"BsAs",
  ciudad:"La Plata"
  };
  console.log(Facultad1);
  
  const addFacultad= (currentFacultad) => {
  //creo el elemento
  const newArticle= document.createElement("article");
  newArticle.innerHTML=

  `${arrayprueba.forEach(element => {
    element=`<li>${element}</li>`;
    console.log(element);
    //por ahora sigo sin saber como imprimir un array
  })};
  <h1>${currentFacultad.name}</h1>
  <ul class="container letra">
  <li>${currentFacultad.name}</li>
  <li>${currentFacultad.alias}</li>
  <li>${currentFacultad.provincia}</li>
  <li>${currentFacultad.ciudad}</li>
  </ul>
  
  `
  return newArticle;
  }


//forma abreviativa de poner const sumarle = fuction(a){}
 const sumarle= a=>a+512;

//imprimo en el main adosandolo con el append a lo que ya está
const main = document.querySelector("main");
//paso el objeto a la función .
main.append(addPerson(Person), addFacultad(Facultad1)); 


//no podemos usar una arrow functon dentro del objeto debido a que no entiende 
// la sintaxis this.mochila1, va a buscar la variable mas cerca.
window.volume=20;
const mochila1= {
name:"Mochilota1",
color:"azul",
volume:8,
pocketNum:3,
//función dentro de objeto
newVolume: function(cambio){
  //el this.volume te deriva siempre a la variable del objeto actual
console.log("volumen actual: ", this.volume);
this.volume= cambio ;
console.log("volumen luego del update", this.volume);

// function que actua de forma global, agarra las variables de forma global aguera tmb
(function(){
  console.log(this.volume)
})();
//No se usa arrow function porq no sabe a donde te deriva el this.volume
//busca la variable volume mas cerca
(()=>{
  console.log(this.volume)
})();




}

}


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
 Tip percentage=  ${percentage}
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




