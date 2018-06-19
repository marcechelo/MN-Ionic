import {Component, OnInit} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {UsuarioService} from "../../servicios/usuario.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  nombre = "Hola";
  password = "";
  passwordConfirmacion = "";
  duracionToast = 3000;
  posicionToast = 'top';

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              private _usuarioService: UsuarioService,
              private _httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    console.log(this._usuarioService.nombreUsuario);
    const observablePokemon$ = this._httpClient
      .get('https://jsonplaceholder.typicode.com/posts/1');
    //http://pokeapi.co/api/v2/pokemon/25
    //https://jsonplaceholder.typicode.com/posts/1
    observablePokemon$
      .subscribe(
        (ok)=>{
          console.log('OK',ok)
        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );


  }


  validarFormulario(formulario: NgForm) {
    // console.log(formulario);
    console.log(this._usuarioService.nombreUsuario);
    this._usuarioService
      .emitirCambioNombreUsuario('Pepita');
    console.log(this._usuarioService.nombreUsuario);

    if (formulario.controls.password.value === // form
      this.passwordConfirmacion) { // ngModel
      // OK!
    } else {
      this.mostrarToast('Los passwords deben de ser iguales');
      this.password = "";
      this.passwordConfirmacion = "";
    }
  }

  mostrarToast(mensaje: string) {
    const toast = this.toastCtrl
      .create({
        message: mensaje,
        duration: this.duracionToast, // 3000
        position: this.posicionToast // 'top'
      });
    toast.present();
  }

}
