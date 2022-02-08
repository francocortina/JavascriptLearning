class book{
    constructor(
  //Defino parametros
name,
volumen,
color,
bolsillos,
longLeft,
longRight,
tapaAbierta)

{
//Defino propiedades
this.name=name;
this.volumen=volumen;
this.coolor=color;
this.bolsillos=bolsillos;

this.long={
right:longRight,
left:longLeft},

this.tapaAbierta=tapaAbierta;



}
//Métodos
tapaCambio(tapaEstado){
    this.tapaAbierta=tapaEstado;
}
longitudT(left,right){
    this.long.left=left;
    this.long.right=right;
}



};

export default book;

