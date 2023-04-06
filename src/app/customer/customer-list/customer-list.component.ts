import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer-modal';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  @Input() dataValueOfApi!:Customer;
  @Output() onChange= new EventEmitter<any>();
  public data!:any;
  myForm: FormGroup;
  public statusData = [
    
      { name: 'Status',value:''},
      { name: 'Open',value:'Open'},
      {name: 'Error',value:'Error'},
      { name: 'Inactive',value:'Inactive'},
      {name: 'Sucess',value:'Inactive'}
  
];
  constructor(builder: FormBuilder ) {
   
    this.myForm = builder.group({
      amount: ['', Validators.required],
      status:['',Validators.required]
    });
  }    

  delete(id:any)
  {
this.onChange.emit({id:id,name:"delete"})
  }
  edit(id:any)
  {
   
    this.onChange.emit({id:id,name:"edit",show:true})
  }
  showform()
  {
    this.onChange.emit({show:true})
  }
  hide(event:any){
    if(event.target.checked===true)
    {
      console.log("ch")
    }
    console.log("ch")
    this.onChange.emit({show:false})
  }  
 
}
