import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss']
})
export class RegistroPage {
  registroForm: FormGroup; // Inicializa sin asignar un valor nulo
  tipoUsuario: string = 'conductor';
  nombre: string = '';
  vehiculo: string = '';
  patente: string = ''; 
  asignatura1: string = ''; 
  asignatura2: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private menuController: MenuController,
    private alertController: AlertController
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipoUsuario: ['conductor', Validators.required],
      vehiculo: [''],
      patente: [''],
      asignatura1: [''],
      asignatura2: [''],
    });
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  async registrarUsuario() {
    if (this.registroForm.valid) {
      // El formulario es válido, procesa los datos aquí
      const usuario = this.registroForm.value;
      console.log(usuario);
    } else {
      // Muestra una alerta indicando que todos los campos son obligatorios
      const alert = await this.alertController.create({
        header: 'Gracias',
        message: 'Datos Registrados.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
