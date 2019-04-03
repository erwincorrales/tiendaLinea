var express = require('express')
var bodyparser = require('body-parser')
var app = express()
var Router = require('./router')

app.use(express.json())
// app.use(bodyparser.urlencoded({ useNewUrlParser: true }))

//RUTAS DEL SERVIDOR
app.use('/', Router)

//activar el servidor
app.listen(3000, ()=>{
    console.log('Esta corriendo el servidor para TiendaLinea con mongoose en puerto 3000')
})