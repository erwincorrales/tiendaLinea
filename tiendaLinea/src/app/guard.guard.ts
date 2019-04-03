import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OperacionesService } from './operaciones.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
 
  constructor(private operaciones: OperacionesService, private router: Router){}
  
  canActivate(){
    console.log("logeado: " + this.operaciones.no_login)
    if(this.operaciones.no_login){
      return true
    }
    else{
      this.router.navigate([''])
      return false
    }
      
  }
}
