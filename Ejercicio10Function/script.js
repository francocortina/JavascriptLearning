
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

sumar(24,25);


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



//creo la funcion que pase un objeto y lo descomponga en cuanto al objeto
const addPerson= function (currentPerson) {
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
  
  const addFacultad= function(currentFacultad){
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


//imprimo en el main adosandolo con el append a lo que ya está
const main = document.querySelector("main");
//paso el objeto a la función .
main.append(addPerson(Person), addFacultad(Facultad1)); 






