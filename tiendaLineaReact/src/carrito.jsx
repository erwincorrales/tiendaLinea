import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './carrito.css'

class Carrito extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
          <div className="carrito">
            <h4>Carrito de Compras</h4>
            <hr></hr>
            <div className="contenido">
              <div className="lista">

                { this.props.escogidos.map((prod, index) =>(
                  
                  <div className="item">
                    <img src={"img/"+ prod.item.imagen} alt="" className="carritoImg"></img>
                    <div>
                      <h5>{prod.item.nombre}</h5>
                      <p>Cantidad: {prod.cant} </p>
                      <p>Subtotal: ${ parseInt(prod.cant) * parseInt(prod.item.precio)}</p> 
                    </div>
                  </div>
                ))
                }    

              </div>
              <div className="saldo">
                <h3>Total: $ <span >{this.calcularTotal()}</span> </h3>
                <div className="btn-group">
                  <button className="btn btn-danger" onClick = {()=>{this.borrarListado()}}>Cancelar</button>
                  <button className="btn btn-primary" onClick = {()=>{this.comprar()}}>Pagar</button>
                </div>
              </div>
              </div>
          </div> 
        )
    }

    calcularTotal(){
      var total = 0
      this.props.escogidos.map((prod)=>{
        total += parseInt(prod.item.precio) * parseInt(prod.cant) 
      })
      return total
    }

    borrarListado(){
      this.props.borrarEscogidos()
    }

    comprar(){
      var data = "Registro MongoDb Compra: "

      if(this.props.escogidos.length > 0){
        
        this.props.escogidos.map(elemento=>{
          fetch('http://localhost:3000/compra', {
            method: 'POST',
            body: JSON.stringify({id: elemento.item._id, valor: elemento.cant}),
            headers:{'Content-Type': 'application/json'}
          })
          .then(res => res.json())
          .then(respuesta => data.concat(respuesta.resp + "\n") )
          
        })
        alert('COMPRA REALIZADA! \n\nArticulos: ' + this.props.escogidos.length + "\n" + data)
        this.borrarListado()
        // ReactDOM.render(<App/>, document.getElementById('app'))
      }
      else
        alert('IMFORMACION! \nNo tienes ningun artículo seleccionado para comprar!')

      
    }
}

export default Carrito


