import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { 
    this.getProducts().subscribe(data => {
      console.log(data);
    });
  }
  baseUrl:string = 'http://localhost:5254/';

  // public getClients(){
  //   const headers = new HttpHeaders({ 'Content-Type':'application/json' });
  //   return this.http.get(this.baseUrl+"Client");
  // }
  // public getProducts(){
  //   const headers = new HttpHeaders({ 'Content-Type':'application/json' });
  //   return this.http.get(this.baseUrl+"Product");
  // }
  public getProducts(){
    return this.http.get("./assets/products.json");
  }
  public getClients(){
    return this.http.get("./assets/clients.json");
  }
}
