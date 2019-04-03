import { Component, OnInit } from '@angular/core';
import { OperacionesService } from './../../operaciones.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  item: any

  constructor(public operaciones: OperacionesService) { }

  ngOnInit() {

  }

  esconder(){
    this.operaciones.componenteActivo = 0
  }

}
