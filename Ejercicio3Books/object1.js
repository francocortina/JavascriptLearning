import book from "./book.js";

const creatingbooks = new book(
"Franco",
"Franco",
"Madagascar",
"red",
26,
15,
false

);



const creatingbooks2 = new book(
    "Marcos",
    "Franco",
    "Madagascar",
    "red",
    26,
    15,
    false
    
    );


    
const creatingbooks3 = new book(
    "Teresa",
    "Franco",
    "Madagascar",
    "red",
    26,
    15,
    false
    
    );


    
const creatingbooks4 = new book(
    "Manuel",
    "Franco",
    "Madagascar",
    "red",
    26,
    15,
    false
    
    );

    const creatingbooks5 = new book(
        "Rodrigo",
        "Franco",
        "Madagascar",
        "red",
        26,
        300,
        false
        
        );
console.log("data objeto mochila1",creatingbooks);
console.log("data objeto mochila2",creatingbooks2);
console.log("data objeto mochila3",creatingbooks3);
console.log("data objeto mochila4",creatingbooks4);
console.log("data objeto mochila5",creatingbooks5);
console.log("el libro esta abierto?", creatingbooks.tapaEstado);

creatingbooks.tapaAbierta(true);
console.log("el libro esta abierto?",creatingbooks.tapaEstado);


console.log("Cantidad de hojas:", creatingbooks.pag.volumen);
creatingbooks.cantidadPaginas(33,45);

console.log("Cantidad de hojas:", creatingbooks.pag.volumen);
console.log("Cantidad de hojas:", creatingbooks.pag.pro);

console.log("Edición:", creatingbooks3.edicion);
console.log("data objeto mochila",creatingbooks["cantidadPaginas"]);


