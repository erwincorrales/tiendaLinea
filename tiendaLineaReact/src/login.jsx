import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import './login.css'
import $ from 'jquery'

class LoginComponent extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            mensaje: " "
        }

        this.cambiarMensajeLogin = this.cambiarMensajeLogin.bind(this)
        this.login=this.login.bind(this)
    }

    render(){
        return(
        <div className="a container-fluid">
        <img src="./img/login-fondo.jpg" alt="" className="loginFondo"></img>
            <div className="row">
                <form className="login" onSubmit={this.login}>
                    <h3>Iniciar Sesion</h3>
                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input type="text" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required></input>
                    <label htmlFor="clave">Contraseña:</label>
                    <input type="password" required></input>
                    <label className="error">{this.state.mensaje}</label>
                    <button className="btn btn-success" type="submit">Ingresar</button>
                </form>
            </div>
        </div>
        )
    }

    
    login(){
        //funcion para hacer login en paginia login
        event.preventDefault()
            let user = $('input[type="text"]').val()    
            let pass = $('input[type="password"]').val()
            fetch('http://localhost:3000/login', {
                method: 'POST',
                body: JSON.stringify({correo: user, clave: pass}),
                headers:{
                    'Content-Type': 'application/json'
                  }
            }).then(res => res.json())
            .then(response => {
                if(response.login !== "YES")
                    this.cambiarMensajeLogin()
                else
                    ReactDOM.render(<App/>, document.getElementById('app'))   
            })       
    }

    cambiarMensajeLogin(){
        this.setState({mensaje: 'Datos incorrectos! No hay Log in'})
    }
    
}

export default LoginComponent