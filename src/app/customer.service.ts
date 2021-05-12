import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private obj:HttpClient) { }
url="http://localhost:52015/Order/"

  getCountryList():Observable<object>{
  return this.obj.get(this.url+'CountryCurrency');
  }

  saveCustomerData(data:any) : Observable<object>{
return this.obj.post(this.url + 'postData', data)
  }

  getCustomerList(): Observable<object>{
    return this.obj.get(this.url + 'GetCustomerDetails')
  }


  getCustomerDataById(id:number): Observable<object>{
    return this.obj.get(this.url + 'GetCustomerById/' + id)
  }


  updateCustomerData(data:any) : Observable<object>{
    return this.obj.post(this.url + 'UpdateCustomerDetails', data);
  }

  deletCustomerData(id:number):Observable<object>{
    return this.obj.get(this.url+'DeleteCustomer/' + id)
  }

}
