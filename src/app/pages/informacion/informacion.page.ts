import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(private MenuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.MenuController.open('first');
  }

}
