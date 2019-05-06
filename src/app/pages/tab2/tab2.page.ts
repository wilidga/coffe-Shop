import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor( public productos: ProductosService, public toastController: ToastController) {}

  Agregar( m ) {
    this.productos.addMenu(m);
    this.presentToast('agregando 1 menu de ' + m.Descripcion);
  }
  quitar(m) {
    this.productos.removeMenu(m);
    this.presentToast('quitando 1 menu de ' + m.Descripcion );
  }

  async presentToast(desc: string) {
    const toast = await this.toastController.create({
      message: desc,
      duration: 1000
    });
    toast.present();
  }
}
