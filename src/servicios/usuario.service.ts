import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {
  nombreUsuario = 'Adrian';

  cambioNombreUsuario: EventEmitter<string> = new EventEmitter();

  sumarDosNumeros(numeroUno: number, numeroDos: number) {
    return numeroUno + numeroDos;
  }

  emitirCambioNombreUsuario(nombreUsuario: string) {
    this.nombreUsuario = nombreUsuario;
    this.cambioNombreUsuario.emit(nombreUsuario);
  }


  // static sumarDosNumeros(numeroUno: number, numeroDos: number) {
  //   return numeroUno + numeroDos;
  // }

}

// UsuarioService.sumarDosNumeros()
