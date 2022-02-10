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
console.log("data objeto mochila",creatingbooks);
console.log("el libro esta abierto?", creatingbooks.tapaEstado);

creatingbooks.tapaAbierta(true);
console.log("el libro esta abierto?",creatingbooks.tapaEstado);


console.log("Cantidad de hojas:", creatingbooks.pag.volumen);
creatingbooks.cantidadPaginas(33,45);

console.log("Cantidad de hojas:", creatingbooks.pag.volumen);
console.log("Cantidad de hojas:", creatingbooks.pag.pro);
