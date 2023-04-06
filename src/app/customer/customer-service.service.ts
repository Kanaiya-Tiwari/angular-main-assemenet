import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  public url!:any;
  constructor(private HttpClinet:HttpClient ) { 
    this.url='http://localhost:3000/customer/'
  }
  getCustomer():Observable<any>
  {
    return  this.HttpClinet.get(this.url)
  }
  addCustomer(data:any):Observable<any>
  {
  
    return this.HttpClinet.post(this.url,data);
  }
  deleteCustomer(id:any):Observable<any>
  {
    return this.HttpClinet.delete(this.url+id);
  }
  getCustomerByID(id:any):Observable<any>
  {
    return  this.HttpClinet.get(this.url+id);
  }
  updateCustomer(data:any,id:any):Observable<any>
  {
    
    return this.HttpClinet.put(this.url+id, data);
  }
}
