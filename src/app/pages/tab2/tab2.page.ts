import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor( public productos: ProductosService) {}

  Agregar( m ) {
    this.productos.addMenu(m);
  }
  quitar(m) {
    this.productos.removeMenu(m);
  }
}
