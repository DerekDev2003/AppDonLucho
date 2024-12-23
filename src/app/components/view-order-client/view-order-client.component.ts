import { TmplAstDeferredBlockPlaceholder } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-order-client',
  templateUrl: './view-order-client.component.html',
  styleUrls: ['./view-order-client.component.scss'],
  standalone: false
})
export class ViewOrderClientComponent implements OnInit, OnChanges {
  @Input() productOrderList: Product[] = [];
  orderListClone: Product[]; 
  @Output() productRemoved= new EventEmitter<Product>(); 

  constructor(private cdr: ChangeDetectorRef) {
    this.orderListClone=[];
  }

  ngOnInit() {
  }
  //Un objeto de tipo simpleChanges contiene los cambios que se han realizado en un dato de tipo @Input de un componente, este almacena los cambios. Por tanto se puede utilziar para actualizar un componente.
  //changes[property]: Accede a la propiedad especifica que ha cambiado osea al objeto de tipo input que se ha modificado.
  //Si ha cambiado se puede actaulizar la lista con un meotodo.

  //Metodo ngOnChanges
  /*Siempre se usa con un SimpleChanges que maopea el nombre de las propiedades de entrada a instancias de simpleChange 
  
  */
  ngOnChanges(changes:SimpleChanges) {
    if(changes['productOrderList']){
      this.updateOrderListClone(); 
    }
  
  }

  updateOrderListClone():void {
    this.orderListClone= this.productOrderList.map(item=> new Product(
      item.id,
      item.name,
      item.description,
      item.price,
      item.image,
      item.type,
      item.category,
      item.quantity)); 

      this.cdr.detectChanges
  }
  removeProductOrderList(Product:Product):void{
    this.productRemoved.emit(Product);
  }
}
