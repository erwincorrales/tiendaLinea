import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { OperacionesService } from './operaciones.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService, OperacionesService]
})
export class AppComponent {
  title = 'tiendaLinea';
}
