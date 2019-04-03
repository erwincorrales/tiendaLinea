import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { OperacionesService } from '../operaciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin: FormGroup
  no_login: false
  
  constructor(public http: HttpService, private operaciones: OperacionesService, private router: Router){}

  logearse(user: string, clave: string, event: Event){
    event.preventDefault()
    
    this.http.login(user, clave)
    .subscribe((data: any)=>{
      if(data.login === 'YES'){
        this.operaciones.no_login = true
        sessionStorage.setItem('user', user)
        this.router.navigate(["tienda"])
      }
    })
  }

  ngOnInit(){
    //setea login a false
    // this.httpService.setLoginStatus(false)
    
    // define validacion del formulario los elementos de login
    this.formlogin = new FormGroup({
      'usuario' : new FormControl('', Validators.required),
      'contrasena' : new FormControl('', Validators.required)
    })
    
  }
}
