
//ARRAY Y LISTAS

  let item = "flash";
  const collection =["Franco",item, 5, true];

//Elimina el último elemento
collection.pop();
//Agrega al principio
collection.unshift("virtual")
//agrega el del final al principio
collection.unshift(collection.pop());
  //agregar
collection.push("red");


//hallar un item especifico
const findItem= collection.find(item => item==="cat");
console.log("found item", findItem);


//splice remlaza , agrega o elimina
//(posicion,cantidad de eliminados luego de la posicion, valor agregado opcional)
  collection.splice(1,2,"brown");
   //este es especifico para eliminar algo
  collection.splice(collection.indexOf("brown"),1,"black")

  //ordenarlos alfabeticamente por default
 collection.sort();
  console.log(collection);

  
  collection.forEach(function(item){
   item= `<li> ${item}</li>`
  
    
   
    
    console.log(item);
   

  })


  const Objt={
    name:"franco",
    apellido:"Cortina"
  }
  const arrayfc = [
"Franco",5,Objt
  ];
  console.log(Objt);
  console.log(arrayfc);

  arrayfc.forEach(function(item){
    item =`<li> ${item}</li>`
    console.log(item);
  })
 

function sumar (a,b){

  let suma=a+b;
  console.log(suma);

}



var resta=25;
console.log(resta);
function restar (a,b){
resta= a-b;
return resta;
}
restar(25,36);
console.log(resta)
console.log(restar(300,125));

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

