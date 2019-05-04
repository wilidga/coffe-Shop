import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IonSlides, NavController } from '@ionic/angular';
import { UiServiceService } from '../../services/ui-service.service';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

loginUser = {
  email: '',
  password: ''
};

registerUser = {
  email: '',
  nombre: '',
  password: '',
  avatar: ''
};

avatarSlide = {
  slidesPerView: 3.5
};

  constructor(private navCtrl: NavController, private uiService: UiServiceService, private users: UsuarioService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  login( fLogin: NgForm ) {
    if (fLogin.invalid ) {return; }
    const bLogin = this.users.login( this.loginUser);
    if ( bLogin ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }
  }
  registro( fRegistro: NgForm ) {
    console.log( fRegistro.valid);
    console.log( this.registerUser);
  }
  seleccinarAvatar( avatar ) {
    this.avatars.forEach( av => av.seleccionado = false );
    avatar.seleccionado = true;
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
