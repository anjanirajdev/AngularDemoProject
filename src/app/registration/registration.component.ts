import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from  '@angular/forms'
import {CustomerService} from '../customer.service'
import {NotificationService} from '../notification.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private obj: CustomerService, private _notify:NotificationService, 
    private route : Router, private _activeRoute : ActivatedRoute) { }

  form = new FormGroup({
    Country: new FormControl('', Validators.required),
    FirstName: new FormControl('',Validators.required),
    LastName: new FormControl('',Validators.required),
    Email: new FormControl('',[Validators.required, Validators.email]),
    PinCode: new FormControl('',Validators.required),
    Address: new FormControl('',Validators.required),
    UserId : new FormControl('')
   
  });

  get res (){
   return this.form.controls;
  }

  id:any

  country : any
  ngOnInit(): void {
    this.obj.getCountryList().subscribe(x=>{
  this.country = x;
    })

    this._activeRoute.paramMap.subscribe(x=>{
  this.id = x.get('id')
  
  console.log(this.id);
    })

    if(this.id > 0){
      this.obj.getCustomerDataById(this.id).subscribe(x=>{
        this.form.patchValue(x);
      })
    }
  }

  submit(){


console.log(this.form.value);

if(this.id> 0){
 this.form.controls.UserId.patchValue (this.id);
  this.obj.updateCustomerData(this.form.value).subscribe(x=>{
      this._notify.getSuccess("data updated successfully", "Updation done");
      this.route.navigateByUrl('/customerlist');
  })

  return;
}

this.obj.saveCustomerData(this.form.value).subscribe(x=>{
    this._notify.getSuccess("Customer added successfully", "Registration done");
    this.route.navigateByUrl('/customerlist');
})
return;
  }

}
