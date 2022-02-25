//Array y Objetos nesteados Display

//primero llamo  al articulo
const article = document.querySelector("article");

//Segundo  creo la lista  para dezplazar el array



/* Creo el array  */

const ArrayDisplay=["Franco","Manuel","Victoria","Manato","Melisa", "Macarena", "Pedro" ];


/*Creo el objeto con objetos nested adentro */

const objetoNested= {
    item01:{
        name:"Barbie",
        type:"toy",
        weight:120,
    },
    item02:{
        name:"Cartuchera",
        type:"toy",
        weight:30,
    },
    item03:{
        name:"mochila",
        type:"eqipment",
        weight:30,
    },

    item04:{
        name:"Franco",
        type:"toy",
        weight:34,
    },
    item05:{
        name:"Franco",
        type:"toy",
        weight:34,
    },
    item06:{
        name:"Franco",
        type:"toy",
        weight:34,
    },

}


//RECORRIENDO ARRAYS

/*Llamo al articulo (etiqueta)*/
const Articulo= document.querySelector("article");
//Luego creo una lista (ul), donde se irán agregando li
let Newlist = document.createElement("ul");

/*for loop */
for (let index = 0; index < ArrayDisplay.length; index++) {
    ///crea aqui las li de la lista que se autoincrementan
    let listaDisplay =  document.createElement("li");
    //luego aca se imprime la li
  listaDisplay.innerHTML= `Nombre: ${ArrayDisplay[index]}`;
  //el append es para que no se borren los otros nombres cuando se autoincrementa
    Newlist.append(listaDisplay);
    
}


//este es el mas eficiente y facil para recorrer uun array
ArrayDisplay.forEach(element => {
    let listaDisplay =  document.createElement("li");
    listaDisplay.innerHTML=`Nombre: ${element} `;
    Newlist.append(listaDisplay);
});

Articulo.append(Newlist);



//RECORRIENDO Objetos dentro de otros objetos, nestedObjects

///for...in loop and objects
//ESTE FUNCIONÓ FALTA AVERIGUAR  BIEN LA PROPIEDAD Object.hasOwnProperty.call
for (const key in objetoNested) {
    if (Object.hasOwnProperty.call(objetoNested, key)) {
        const element = objetoNested[key].name;
        console.log(element)
        
    }
}

//Usar este por el momento
for (const Singleobject in objetoNested) {
    let listaDisplay= document.createElement("li");
    listaDisplay.innerHTML= `<h1></h1>
    Nombre= ${objetoNested[Singleobject].name}`
    Newlist.append(listaDisplay);
   
}