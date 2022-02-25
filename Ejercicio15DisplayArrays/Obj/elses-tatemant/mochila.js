
//Primero hago la clase mochila

class mochilaclase {
  //constructor
    constructor(
      name,
      volumen,
      color,
      bolsillos,
      longLeft,
      longRight,
      tapaAbierta
  
    )
  
    //Defino que es cada propiedad
  
    {
      this.name=name;
      this.volumen=volumen;
      this.color=color,
      this.bolsillos=bolsillos;
      this.long={
        left:longLeft,
        right:longRight
  
      },
      this.tapaAbierta=tapaAbierta;
  
    }
  
    ///Metodos
  
     Cambiar(Cambiotapa){
  if(this.Cambiotapa){
    this.tapaAbierta=Cambiotapa;
    console.log("La tapa se encuentra abierta: ",this.tapaAbierta);
  
  }else{
    this.tapaAbierta=Cambiotapa;
    console.log("La tapa se encuentra cerrada: ", this.tapaAbierta)}
  
     }
  
  
  }
  
  
  export default mochilaclase;