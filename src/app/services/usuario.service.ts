import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  users = [
    {
      email: 'cafeteria@kutech.com.gt',
      nombre: 'Helen Mazariegos',
      password: 'admin',
      avatar: 'av-5.png'
    }, {
      email: 'omartinez@kutech.com.gt',
      nombre: 'Osbin Martinez',
      password: 'admin',
      avatar: 'av-1.png'
    }
  ];

  constructor() { }

  login(email, password ) {

  }
  register(email, nombre,  password, avatar) {
      this.users.push( email, nombre,  password, avatar);
  }
}
