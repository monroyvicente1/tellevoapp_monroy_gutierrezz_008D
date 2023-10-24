import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarios: any[];

  constructor(private http: HttpClient) {
    this.usuarios=[];
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.http.get<any[]>('../data/usuarios.json').subscribe(data => {
      this.usuarios = data;
    });
  }

  isLoggedIn(username: string, password: string): boolean {
    const usuario = this.usuarios.find(u => u.username === username && u.password === password);
    return !!usuario;
  }
}
