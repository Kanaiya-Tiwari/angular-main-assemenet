import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

import { SearchPipePipe } from './search-pipe.pipe';
import { DropdownPipePipe } from './dropdown-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerServiceService } from './customer-service.service';
import { CustomerComponent } from './customer.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerFormComponent,
  CustomerComponent,
    SearchPipePipe,
    DropdownPipePipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,ReactiveFormsModule,HttpClientModule,NgSelectModule
  ],
  providers:[CustomerServiceService]
})
export class CustomerModule { }
