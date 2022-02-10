class book {
constructor (
    //Defino parametros
name,
autor,
edicion,
color,
prologo,
paginas,
tapaEstado,

)

{
    //Defino propiedades 
this.name=name;
this.autor=autor;
this.edicion=edicion;
this.color=color;
this.tapaEstado=tapaEstado;
this.pag = {
pro:prologo, 
volumen:paginas,
}

}

//metodos
tapaAbierta(estado){
this.tapaEstado=estado;
}

cantidadPaginas(p,v){
    this.pag.pro=p;
    this.pag.volumen=v;
}











}
export default book;

