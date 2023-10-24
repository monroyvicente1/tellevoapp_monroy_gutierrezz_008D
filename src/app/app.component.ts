import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      redirecTo: '/inicio',
      icon:'home-outline'
    },
    {
      name:'Informacion',
      redirecTo: '/informacion',
      icon:'information-outline'
    },
    {
      name:'Formulario',
      redirecTo: '/formulario',
      icon:'school-outline'
    },
    {
      name:'Registro',
      redirecTo: '/registro',
      icon:'school-outline'
    },
    


  ]



  constructor() {}
}
