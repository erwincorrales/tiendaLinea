import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/operaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(public operaciones: OperacionesService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.operaciones.no_login=false
    this.router.navigate([''])
    localStorage.removeItem('user')
  }
}
