import React from 'react';
import './barraNavegacion.css'

class BarraNavegacion extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className="navbar">
                <a href="" className="navbar-brand">TiendaFrutas</a>      
                <div className="right">
                    <li className='material-icons' onClick = {()=>{this.setVentana(1)}}>menu</li>
                    <li className='material-icons' onClick = {()=>{this.setVentana(3)}}>shopping_cart
                    <span className="badge badge-pill badge-danger">{this.numeroEscogidos()}</span>
                    </li>
                    <li className='material-icons'>payment</li>
                    <li className='material-icons'>logout</li>
                </div> 
            </div>
        )
    }

    numeroEscogidos(){
        var respuesta = this.props.numEscogidos
        if( respuesta == 0)
            respuesta = ''
        
        return respuesta    
    }

    setVentana(valor){
        this.props.ventana(valor)
    }
    
}


export default BarraNavegacion