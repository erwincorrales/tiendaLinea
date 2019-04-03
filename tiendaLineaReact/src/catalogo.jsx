import React from 'react'
import './catalogo.css'

class Catalogo extends React.Component{
   
    render(){
        return(
            <div className="catalogo">
                <div className="catalogo-title">
                    <h4 className="brand-logo left">Catálogos de Productos</h4>
                    <div className="busqueda">
                        <p>¿Qué estás buscando?</p>
                        <input className="form-control" type="text" name="busqueda" placeholder="Buscar Producto" onChange={this.filtrar}></input>
                    </div>
                </div>
                <hr></hr>
                <div className="prod-contenedor">
            
                {
                this.props.product.map((item, index)=>(
                   
                   <div className="producto" >
                      <img className="img-fluid" src={"img/"+item.imagen} alt=""></img>
                      <h4 >{item.nombre}</h4>
                      <p><b>Precio: </b><span>${item.precio} </span></p>
                      <p><b>Unidades Disponibles: </b><span>{item.unidades}</span></p>
                      
                      <div className="prod-botones">
                        <button className="btn btn-primary" key={index} onClick={() => this.getDetallado(index)}>Ver Más</button>
                        <span className="añadir">
                            <button className="btn btn-warning" onClick = {()=>{this.addEscogidos(index)}}>Añadir</button>
                            <input className="cantidad" type="number" min="1" step="1" placeholder="1"></input>    
                        </span> 
                      </div>
                    </div>

                 ))
                }

                </div>
            </div>
        )
    }

    //funcion para filtrar productos por nombre
  filtrar(){
    var nombre = event.target.value  
    var items = document.getElementsByClassName('producto')
    var names = document.querySelectorAll('.producto h4') 
    names.forEach((value, element)=>{
        if(value.innerHTML.toLowerCase().indexOf(nombre.toLowerCase()))
          items[element].classList.add('oculto')
        else
          items[element].classList.remove('oculto')
    })
  }

   getDetallado(number){
      this.props.iDetalle(this.props.product[number], 2)
    }

    addEscogidos(valor){
      var cantidad = document.getElementsByClassName('cantidad')[valor].value
      this.props.escogidoCarrito(this.props.product[valor], cantidad)
    }
}

export default Catalogo