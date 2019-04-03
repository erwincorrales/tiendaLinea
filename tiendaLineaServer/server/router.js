var express = require('express')
var Router = express.Router()
var db = require('./CRUD')

//routes

//consultar usuario si coincide contraseña
Router.post('/login', (req,res)=>{
    db.consultarUsuario(req.body.correo, (err,resp)=>{ 
        var respuesta 
        if(req.body !=null){
          if(err) respuesta = "ERROR"
            if(resp[0] != null)
               if(resp[0].clave !== req.body.clave) respuesta = "ERROR"
               else
               respuesta = "YES"
            else
                respuesta = "ERROR"
       }
       else
          respuesta = "ERROR"
        
       //RESPUESTA DEL SERVIDOR 
       res.setHeader('Content-Type', "application/json")
       respuesta = JSON.stringify({login: respuesta})
       res.send(respuesta) 
       console.log("Respuesta del Servidor: "+ respuesta)
    })
})

//consultar productos
Router.get('/productos', (req,res)=>{
    db.consultarProductos((err, resp)=>{
        if(err) res.send(err)
        else{
            res.setHeader('Content-Type', 'application/json')
            respuesta = JSON.stringify(resp)
            res.send(respuesta)
        }
    })
})


//hacer compra y descontar stock de productos
Router.post('/compra', (req,res)=>{
    db.actualizarProducto(req.body.id, req.body.valor, (err,resp)=>{
       if(err) res.send(err)
       else{
        //RESPUESTA DEL SERVIDOR 
       res.setHeader('Content-Type', "application/json")
       respuesta = JSON.stringify(resp)
       res.send(respuesta)
       console.log('respuesta servidor: '+ JSON.stringify(resp) ) 
       }
       
    })
})


//status
Router.get('/status',(req,res)=>{
    res.send('Servidor Atento a peticiones de TiendaLinea!')
})

module.exports = Router