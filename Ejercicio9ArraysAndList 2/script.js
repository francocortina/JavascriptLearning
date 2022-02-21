
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

  const main = document.querySelector(".maincontent");
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