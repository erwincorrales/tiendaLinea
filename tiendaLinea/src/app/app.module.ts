import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MainTiendaComponent } from './main-tienda/main-tienda.component';
import { BarraNavegacionComponent } from './main-tienda/barra-navegacion/barra-navegacion.component';
import { CatalogoComponent } from './main-tienda/catalogo/catalogo.component';
import { ProductoComponent } from './main-tienda/producto/producto.component';
import { OperacionesService } from './operaciones.service';
import { HttpService } from './http.service';
import { CarritoComponent } from './main-tienda/carrito/carrito.component';
import { GuardGuard } from './guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainTiendaComponent,
    BarraNavegacionComponent,
    CatalogoComponent,
    ProductoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
