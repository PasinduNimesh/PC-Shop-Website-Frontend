import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  public addProduct(product:any){
    return this.http.post('http://localhost:8080/product/add',product)
  }

  public getProducts(){
    return this.http.get('http://localhost:8080/product/get')
  }

  public getProductsByCategory(cid:any){
    return this.http.get('http://localhost:8080/product/get/'+cid)
  }

  public getProduct(pid:any){
    return this.http.get('http://localhost:8080/product/getp/'+pid)
  }
}
