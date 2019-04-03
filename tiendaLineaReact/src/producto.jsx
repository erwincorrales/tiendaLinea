import React from 'react'
import './producto.css'

class Producto extends React.Component{


    render(){
        return(
             //html de detalle   
             <div className="detalle">
             <h3>{this.props.detallado.nombre}</h3>
             <hr></hr>
             <div className="contenido" >
               <img src={"img/"+this.props.detallado.imagen} alt=""></img>
               <div className="descripcion">
                 <p><b>Precio: </b>$ {this.props.detallado.precio}</p>
                 <p><b>Unidades Disponibles: </b>{this.props.detallado.unidades}</p>
               </div>
             </div>
             <button className="btn btn-primary" onClick={()=>{this.retornarCatalogo()}}>Atrás</button>
           </div>
        )
    }

    retornarCatalogo(){
      console.log("[HIJO] VENTANA ACTIVA: " + 1 )
      this.props.ventana(1)
    }
}

export default Producto