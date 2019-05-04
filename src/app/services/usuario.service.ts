import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  users = [
    {
      email: 'cafeteria@kutech.com.gt',
      nombre: 'Helen',
      password: 'admin',
      avatar: 'av-5.png',
      tipo_user: 'admin',
      QR: ''
    }, {
      email: 'omartinez@kutech.com.gt',
      nombre: 'Osbin',
      password: 'admin',
      avatar: 'av-1.png',
      tipo_user: 'empl',
      QR: 'qrOsbin.png'
    },
     {
      email: 'wgarcia@kutech.com.gt',
      nombre: 'wilman',
      password: 'admin',
      avatar: 'av-1.png',
      tipo_user: 'empl',
      QR: ''
    }

  ];

  constructor() { }

   login( loginUser  ) {
    let bLogin = false;
    this.users.forEach (item => {
      if ( item.email === loginUser.email) {
        if (item.password === loginUser.password) {
          bLogin = true;
          return bLogin;
        }
      }
   });
    console.log(bLogin);
    return bLogin;
}
  register(email, nombre,  password, avatar) {
      this.users.push( email, nombre,  password, avatar);
  }
}
