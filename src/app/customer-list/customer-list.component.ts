import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
import {NotificationService} from '../notification.service'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private _obj: CustomerService, private _notify : NotificationService) { }
 model : any
  ngOnInit(): void {

   this. getCustomerList();


  }

  getCustomerList(){
    this._obj.getCustomerList().subscribe(x=>{
      this.model = x;
          })
  }

  deleteCustomer(id:number) {
this._obj.deletCustomerData(id).subscribe(x=>{
  this._notify.getSuccess("Customer deleted successfuly", "Deletion done");
this.getCustomerList()
})
  }

}
