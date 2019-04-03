import { Component, OnInit, Input } from '@angular/core';
import { OperacionesService } from "./../../operaciones.service"
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
    
  productos: any
   
  constructor(public operaciones: OperacionesService, private http:HttpService){
    
  }

  ngOnInit() {
    this.http.getProductos()
    .subscribe((data: any)=>{
      this.operaciones.setProductos(data)
      this.productos = data
    })
  }


  //funcion para filtrar productos por nombre
  buscar(nombre:string){
    var items = document.getElementsByClassName('producto')
    var names = document.querySelectorAll('.producto h4') 
    names.forEach((value, element)=>{
        if(value.innerHTML.toLowerCase().indexOf(nombre.toLowerCase()))
          items[element].classList.add('oculto')
        else
          items[element].classList.remove('oculto')
    })
  }

}
