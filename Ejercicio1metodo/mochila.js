const mochila={
name:"franco",
volume:30,
color:"red",
bolsillos:15,
longitudTiras: {
left: 26,
right:26,

},

tapaAbierta:false,

tapaCammbio:function(estadoTapa){
    this.tapaAbierta= estadoTapa;
},

longitudT:function(left1,right1){
    this.longitudTiras.left = left1;
    this.longitudTiras.right = right1;
} ,

};

console.log("mochila:", mochila);
console.log("mochila abierta", mochila.tapaAbierta);

mochila.tapaCammbio(true);
console.log("mochila abierta", mochila.tapaAbierta);


console.log("la longitud de las tira izquierda es",mochila.longitudTiras.left );
mochila.longitudT(15,23);
console.log("la longitud de las tira izquierda es",mochila.longitudTiras.left );