import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  productos = [ {
  id: '1',
  Descripcion: 'Menu de hamburguesa y papas',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'hamburgesa.png'
},
{
  id: '2',
  Descripcion: 'Menu de Pepian',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'pepian.png'
},
{
  id: '3',
  Descripcion: 'Menu de Pollo frito y papas',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'pollofrito.png'
},
{
  id: '4',
  Descripcion: 'Menu de Carne Asada',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'carneasada.png'
},
{
  id: '5',
  Descripcion: 'tostadas',
  precio_asociacion: 'Q 5.00',
  Precio_prod: 'Q 7.00',
  cant: 0,
  Image: 'tostadas.png'
},
{
  id: '6',
  Descripcion: 'chuchitos',
  precio_asociacion: 'Q 5.00',
  Precio_prod: 'Q 7.00',
  cant: 0,
  Image: 'chuchitos.png'
},
{
  id: '7',
  Descripcion: 'rellenitos',
  precio_asociacion: 'Q 5.00',
  Precio_prod: 'Q 7.00',
  cant: 0,
  Image: 'rellenitos.png'
},
];
menus = [ {
  id: '1',
  Descripcion: 'Menu de hamburguesa y papas',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'hamburgesa.png'
},
{
  id: '2',
  Descripcion: 'Menu de Pepian',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'pepian.png'
},
{
  id: '3',
  Descripcion: 'Menu de Pollo frito y papas',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'pollofrito.png'
},
{
  id: '4',
  Descripcion: 'Menu de Carne Asada',
  precio_asociacion: 'Q 15.00',
  Precio_prod: 'Q 20.00',
  cant: 0,
  Image: 'carneasada.png'
},
{
  id: '5',
  Descripcion: 'tostadas',
  precio_asociacion: 'Q 5.00',
  Precio_prod: 'Q 7.00',
  cant: 0,
  Image: 'tostadas.png'
},
{
  id: '6',
  Descripcion: 'chuchitos',
  precio_asociacion: 'Q 5.00',
  Precio_prod: 'Q 7.00',
  cant: 0,
  Image: 'chuchitos.png'
},
{
  id: '7',
  Descripcion: 'rellenitos',
  precio_asociacion: 'Q 5.00',
  Precio_prod: 'Q 7.00',
  cant: 0,
  Image: 'rellenitos.png'
},
];

  constructor() { }


  getMenu() {
    return this.productos;
  }
  addMenu( m ) {
    this.menus.forEach (item => {
      if ( item.id === m.id) {
        if ( item.cant >= 0 ) {
         item.cant = item.cant + 1;
        }
      }
   });
  }
 removeMenu( m ) {
  this.menus.forEach (item => {
    if ( item.id === m.id) {
      if ( item.cant > 0 ) {
       item.cant = item.cant - 1;
      }
    }
 });
  }
}
