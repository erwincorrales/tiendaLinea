import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  
  constructor(private http: HttpClient) {}

  login(correo: any, clave: any): Observable<any>{ 
    return this.http.post('http://localhost:3000/login', {correo: correo, clave: clave})
  }

  getProductos(): Observable<any>{
    return this.http.get('http://localhost:3000/productos')
  }

  comprar(id: string, valor: number): Observable<any>{
    return this.http.post('http://localhost:3000/compra', {id: id, valor: valor})
  }


}

