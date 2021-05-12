import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from '../app/registration/registration.component'
import {AppComponent} from './app.component'
import {CustomerListComponent} from '../app/customer-list/customer-list.component'

const routes: Routes = [
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'home', component : AppComponent
  },
  {
    path:'customerlist', component: CustomerListComponent
  },
  {
    path:'edit/:id', component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
