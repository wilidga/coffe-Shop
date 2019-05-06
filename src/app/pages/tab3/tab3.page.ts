import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  menuselect: any = [];
  total = 0.0;
  menus: any = [];
  constructor( public productos: ProductosService) {
    this.loadView();

  }

  loadView() {
    this.total =  0.0;
    this.menuselect = this.productos.getMenuSelected();
    this.menus = this.menuselect.filter(m => m.cant > 0);
    if (this.menus.length === 0) {
      this.total =  0.0;
    } else {
    this.menus.forEach(element => {
      this.total = this.total + element.Precio_prod;
    });
  }
  }
    OnInit() {
           this.loadView();
    }

    ionViewDidEnter() {
      this.loadView();
    }
  ionViewDidLeave() {
    this.loadView();
    }

    borrar(menu) {
      this.productos.borrarMenu(menu);
      this.loadView();
    }

    Agregar( m ) {
      this.productos.addMenu(m);
      this.loadView();
    }
    quitar(m) {
      this.productos.removeMenu(m);
      this.loadView();
    }

    cobrarTotal() {
    }
}
