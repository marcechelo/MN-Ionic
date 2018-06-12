import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre = "Hola";
  password = "";

  constructor(public navCtrl: NavController) {
  }

  validarFormulario(formulario: NgForm) {
    console.log(formulario);
  }

}
