import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {
  constructor(private router: Router,
              private MenuController: MenuController) {}

  mostrarMenu(){
    this.MenuController.open('first');
  }

  irARegistro() {
    this.router.navigate(['/registro']); // Redirige a la página de registro
  }
}