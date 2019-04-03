import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})

export class OperacionesService {
  
  productos: []
  productoDetalle = Array()
  productosEscogidos = Array()
  componenteActivo: Number = 0;
  no_login: boolean = false

  //componente 0 es catalogo
  //componenteactivo 1 es detalle de producto
  //componente activo 2 es compra de elementos

  constructor(private http:HttpService) {
   }

  //metodo descargar articulos de db 
  descargarProductos(){
    this.http.getProductos()
    .subscribe((data: any)=>{
      this.setProductos(data)
    })
  }
  
  getProductos(){
    return this.productos
  }

  setProductos(data:[]){
    this.productos = data
  }

  getProductoDetalle(){
    return this.productoDetalle
  }

  setProductoDetalle(codigo: string){
    this.productos.forEach((value: any)=>{
      if (value._id == codigo){
        this.productoDetalle = Array(value)
      }
      this.componenteActivo = 1
    })
  }

  //contiene el estado activo de los componentes
  setComponenteActivo(number:number){
    this.componenteActivo = number
  }

  getComponenteActivo(){
      return this.componenteActivo
  }

  //agrega productos a vector de articulos seleccionados
  agregarItemCarro(item: any, cant: string){
    var dato = {articulo: item, cantidad: parseInt(cant)}
    console.log('articulo escogido: '+ JSON.stringify(dato))
    this.productosEscogidos.push(dato)
  }

  eliminarArticulosCarrito(){
    this.productosEscogidos=[]
  }

  retornarSaldoTotalCarrito(){
    var total = 0
    this.productosEscogidos.forEach( (value)=>{
      total = total + value.articulo.precio * value.cantidad
    })
    return total
  }

  hacerCompra(){
    this.productosEscogidos.forEach((value)=>{
      var id = value.articulo._id
      var valor = value.cantidad
      this.http.comprar(id,valor)
      .subscribe((data)=>{
         console.log('proceso en base de datos: '+ JSON.parse(data.resp.nModified)) 
      })
    })
    alert("haz realizado la compra!")
    this.eliminarArticulosCarrito()
    this.descargarProductos()
    this.componenteActivo = 0
  }


  //funciones para evaluar estado loggueado en pagina
  getLoginStatus(){
    return this.no_login
  }

  setLoginStatus(estado: boolean){
    this.no_login = estado
  }

}
