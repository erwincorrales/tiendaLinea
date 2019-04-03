var mongoose = require('mongoose')
var url ="mongodb://localhost/tiendaLinea"

mongoose.connect(url,err=>{
    if(err) throw(err)
    console.log('conexion a BASE DE DATOS '+ url)
})

var userSchema = new mongoose.Schema({
    correo: {type: String, required: true},
    clave: {type: String, required: true}
})

var productosSchema = new mongoose.Schema({
    imagen: {type: String, required:true},
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    unidades: {type: Number, required: true}
})

var Model={
    User: mongoose.model('User', userSchema),
    Producto: mongoose.model('Producto', productosSchema)
}

module.exports= Model
