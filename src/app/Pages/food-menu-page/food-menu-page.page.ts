import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-food-menu-page',
  templateUrl: './food-menu-page.page.html',
  styleUrls: ['./food-menu-page.page.scss'],
  standalone: false
})
export class FoodMenuPagePage implements OnInit {
  constructor() { }
  filteredList: Product[] = [];
  ListCategory: string[] = [];
  productOrderList: Product[] = [];

  // Lista por Tab
  HamburguerList: Product[] = [];
  FrenchList: Product[] = [];
  Smoothies: Product[] = [];
  Drinks: Product[] = [];

  ngOnInit() {
    // HamburguerList
    this.HamburguerList = [
      new Product(1, 'Hamburguesa', 'Hamburguesa de Pollo', 5.00, '../../.././assets/svg/Hamburguer.svg', 'Hamburguesa', 'Res'),
      new Product(2, 'Hamburguesa', 'Hamburguesa de Res', 6.00, '../../.././assets/svg/Hamburguer.svg', 'Hamburguesa', 'Pollo'),
      new Product(3, 'Hamburguesa', 'Hamburguesa de Pescado', 7.00, '../../.././assets/svg/Hamburguer.svg', 'Hamburguesa', 'Pavo'),
      new Product(4, 'Hamburguesa', 'Hamburguesa de Pavo', 8.00, '../../.././assets/svg/Hamburguer.svg', 'Hamburguesa', 'Mixta'),
    ];

    // FrenchList
    this.FrenchList = [
      new Product(5, 'Papas Fritas', 'Papas Fritas Clásicas', 3.00, '../../.././assets/svg/FrenchFries.svg', 'Papas Fritas', 'Clásicas'),
      new Product(6, 'Papas Fritas', 'Papas Fritas con Queso', 4.00, '../../.././assets/svg/FrenchFries.svg', 'Papas Fritas', 'Queso'),
      new Product(7, 'Papas Fritas', 'Papas Fritas con Bacon', 4.50, '../../.././assets/svg/FrenchFries.svg', 'Papas Fritas', 'Bacon'),
    ];

    // Smoothies
    this.Smoothies = [
      new Product(8, 'Smoothie de Fresa', 'Smoothie de Fresa y Plátano', 4.00, '../../.././assets/svg/Smoothie.svg', 'Smoothie', 'Fresa y Plátano'),
      new Product(9, 'Smoothie de Mango', 'Smoothie de Mango y Piña', 4.00, '../../.././assets/svg/Smoothie.svg', 'Smoothie', 'Mango y Piña'),
      new Product(10, 'Smoothie Verde', 'Smoothie de Espinaca y Manzana', 4.50, '../../.././assets/svg/Smoothie.svg', 'Smoothie', 'Espinaca y Manzana'),
    ];

    // Drinks
    this.Drinks = [
      new Product(11, 'Coca Cola', 'Coca Cola Regular', 2.00, '../../.././assets/svg/Drink.svg', 'Bebida', 'Coca Cola'),
      new Product(12, 'Fanta', 'Fanta Naranja', 2.00, '../../.././assets/svg/Drink.svg', 'Bebida', 'Fanta'),
      new Product(13, 'Agua', 'Agua Mineral', 1.50, '../../.././assets/svg/Drink.svg', 'Bebida', 'Agua'),
    ];
  }

  // Funciones
  addProductOrderList(Product: Product) {
    const existProduct = this.productOrderList.find(item => item.id === Product.id);

    if (!existProduct) {
      this.productOrderList.push(Product);
      this.productOrderList = [...this.productOrderList];
    } else {
      existProduct.quantity = Product.quantity;
      console.log('Verificación');
      console.log(existProduct.quantity);
      const indexProduct = this.productOrderList.findIndex(item => item.id === Product.id);
      this.productOrderList[indexProduct] = existProduct;
      this.productOrderList = [...this.productOrderList];
    }
    console.log('Lista de pedidos actualizada:', this.productOrderList);
  }

  removeProductOrderList(Product: Product) {
    this.productOrderList.map(item => console.log(item));
    const IndexProductRemove = this.productOrderList.findIndex(item => item.id === Product.id);
    this.productOrderList.map(item => console.log(item));

    if (IndexProductRemove === -1) {
      console.log('Elemento no encontrado');
      return;
    }
    this.productOrderList.splice(IndexProductRemove, 1);
    this.productOrderList = [...this.productOrderList];
  }
}
