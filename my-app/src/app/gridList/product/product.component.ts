import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  clients:any;
  products:any;
  columnsToDisplayClients: string[] = ['clientId', 'clientName', 'clientAddress'];
  columnsToDisplayProducts: string[] = ['productId', 'productName', 'productPrice'];
  constructor(private service:OrderService) { }


  ngOnInit(): void {
    let resp = this.service.getClients();
    resp.subscribe(data => {this.clients = data, console.log(data)})
    let resp1 = this.service.getProducts();
    resp1.subscribe(data1 => {this.products = data1, console.log(data1)})
  }

}
