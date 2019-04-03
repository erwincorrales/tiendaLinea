import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/operaciones.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  

  constructor(public operaciones: OperacionesService) { }

  ngOnInit() {
  }

}
