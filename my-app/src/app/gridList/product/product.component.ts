import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import {SelectionModel} from '@angular/cdk/collections';

// export interface Client {
//   ProductId: number;
//   ProductName: string;
//   ProductPrice: number;
// }

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  clients:any;
  products:any;
  columnsToDisplayProducts: string[] = ['select', 'productId', 'productName', 'productPrice'];
  
  selection = new SelectionModel<any>(true, []);
  
  constructor(private service:OrderService) { }

  // clients: Client[] = [];


  ngOnInit(): void {
    this.loadProducts();
    this.show();
  }

  loadProducts() {
    let resp1 = this.service.getProducts();
    resp1.subscribe(data1 => {this.products = data1})
  }

  show(){
    console.log(this.products)
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = 1;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(this.loadProducts());
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
