import mochila from "./mochila.js";

const creandomochilas = new mochila(
"Franco",
30,
"red",
15,
26,
26,
false

);
console.log("data objeto mochila",creandomochilas);
console.log("data tira izquierda",creandomochilas.long.left);
creandomochilas.longitudT(15,10);
console.log("data tira izquierda",creandomochilas.long.left);

