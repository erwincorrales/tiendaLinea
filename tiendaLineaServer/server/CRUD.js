var Model = require('./model.js')

module.exports.consultarUsuario = (user, callback) =>{
    console.log('ENTRE LOGIN usuario: '+ user)
    Model.User.find({correo: user})
    .exec((err, resp)=>{
        if(err) callback("error", null)
        callback(null, resp) 
    })
}

module.exports.consultarProductos =(callback)=>{
    console.log('ENTREGANDO PRODUCTOS.. ')
    Model.Producto.find()
    .exec((err,resp)=>{
        if(err) callback("error", null)
        callback(null, resp)
    })
}

module.exports.actualizarProducto =(idProducto, valor, callback)=>{
    console.log('Realizando Compra... Actualizando Stock producto: ' +idProducto )
    Model.Producto.updateOne({_id: idProducto }, {$inc: {unidades: -valor}})
    .exec((err,resp)=>{
        if(err) callback("error", null)
        callback(null, {resp: resp})
    })
}