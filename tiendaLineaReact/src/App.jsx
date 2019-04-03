import React from 'react';
import Catalogo from './catalogo.jsx';
import Carrito from './carrito.jsx';
import Producto from './producto.jsx';
import BarraNavegacion from './barraNavegacion.jsx';
import './App.css';

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            productos: Array(),
            componenteActivo: 1,
            itemsEscogidos: Array(),
            detalle: Array(),
            logeado: false
        }
    }

    render(){
        return(
            <div id="principal">
                <img src="./../img/main-fondo.jpg" alt="" className="fondo"></img>
                 <div className="container">
                    
                    
                    <BarraNavegacion 
                    numEscogidos ={this.state.itemsEscogidos.length}
                    ventana = {this.setVentana.bind(this)}
                    />

                    {this.state.componenteActivo == 1 ? 
                        <Catalogo 
                                  product ={this.state.productos} 
                                  iDetalle = {this.getDetallado.bind(this)} 
                                  escogidoCarrito ={this.getEscogido.bind(this)}
                                    
                        />
                    : ''} 
                                        
                    {this.state.componenteActivo == 2 ? 
                        <Producto 
                                detallado ={this.state.detalle} 
                                ventana = {this.setVentana.bind(this)} 
                        />
                    : ''} 
                    
                    {this.state.componenteActivo == 3 ? 
                        <Carrito 
                                escogidos = {this.state.itemsEscogidos}
                                borrarEscogidos ={this.borrarEscogidos.bind(this)}
                        />
                    : ''} 

                </div>    
            </div>    
        )
    }

    //ACTUALIZACION DE STATE PRODUCTOS ANTES DE INICIAR
    componentDidMount(){
        //hacer consulta API por los productos
        fetch('http://localhost:3000/productos')
        .then(response => response.json())
        .then(resp => {
            this.setState({productos: resp})
        })
        this.setState({componenteActivo: 1})
    }
    
    
    // FUNCIONES PARA MANIPULAR LOS STATES: 
    getEscogido(elemento, cantidad){
        var objeto = {item: elemento, cant: cantidad }
        this.setState({ 
            itemsEscogidos: this.state.itemsEscogidos.concat([objeto])
          })
        console.log('[PADRE] ItemEscogido: '+ JSON.stringify(objeto))
    }

    borrarEscogidos(){
        this.setState({itemsEscogidos: []})
    }

    getDetallado(elemento, ventana){
        this.setState({detalle: elemento})
        this.setState({componenteActivo: ventana})
        console.log('[PADRE] Objeto Detalle:' + JSON.stringify(elemento) + " VENTANA ACTIVA: " + ventana)
    }

    setVentana(valor){
        this.setState({componenteActivo: valor})
        console.log("[PADRE] VENTANA ACTIVA: "+ valor)
    }
}

   
export default App


