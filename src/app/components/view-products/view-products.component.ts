import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
  standalone:false
})
export class ViewProductsComponent  implements OnInit {
  @Input() productList:Product[]=[]; 
  ListCategory:String[]=[]; 
  @Output() ProductAdded= new EventEmitter<Product>(); 
  TypeProduct:String='';
  constructor() {

   }
   getListCategory(List:Product[]){
    const categoryList= [... new Set(List.map(item=>item.category))]
    return categoryList; 
  }
  addProduct(Product:Product){
    if(Product.quantity!= undefined
       && Product.quantity>0
       && Number.isInteger(Product.quantity)
      ){
      this.ProductAdded.emit(Product); 

    }
  }

  ngOnInit() {
    this.ListCategory= this.getListCategory(this.productList);
    this.TypeProduct =this.productList[0].type; 

  }

}
