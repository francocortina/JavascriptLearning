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


/* METHOD MAP,  se usa para recorrer el Array pero a su vez
crear otro array, ya sea igual o aplicandole alguuna funcion en el transcurso

*/

const Newarticle=document.querySelector("article");
const NewList= document.createElement("ul");

const arraymap= ArrayDisplay.map((item)=>{
    let listaDisplay= document.createElement("li");
    listaDisplay.innerHTML=`Nombre:  ${item}`;
    return listaDisplay;
})

arraymap.forEach((element)=>{

    NewList.append(element);


})
console.log(ArrayDisplay);
console.log(arraymap);

Newarticle.append(NewList);


//lo hice poq aparecio en un parcial, al parecer le suma 1 al resultado
const myArray = [1, 2, 3, 4]
myArray.forEach( (item, index) => {
    myArray[index] = ++item;
    console.log(myArray[index]);
});
