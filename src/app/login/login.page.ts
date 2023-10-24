import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl}from '@angular/forms';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!: string;
  password!: string;

  loginForm: FormGroup;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;


      const userData = {
        username: username,
        password: password
      };

      this.http.post('appi/login', userData).subscribe(response => {
        // Manejar la respuesta del servidor en caso de éxito.
        console.log(response);
        // Redireccionar al usuario a la página de inicio después de iniciar sesión.
        this.router.navigate(['/informacion']);
      }, error => {
        // Manejar el error en caso de falla.
        console.log(error);
        // Mostrar un mensaje de error al usuario.
        // Por ejemplo:
        // this.errorMessage = 'Credenciales inválidas';
      });
    }
  
      }
  }

