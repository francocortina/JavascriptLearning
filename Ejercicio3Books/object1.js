import book from "./book.js";

const creatingbooks = new book(
"Franco",
30,
"red",
15,
26,
26,
false

);
console.log("data objeto mochila",creatingbooks);
console.log("data tira izquierda",creatingbooks.long.left);
creatingbooks.longitudT(15,10);
console.log("data tira izquierda",creatingbooks.long.left);

