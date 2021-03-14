import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { PRODUCT } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  listAllProducts():Observable<any>{
    return this.http.get('../assets/data/data.json');
  }
}
