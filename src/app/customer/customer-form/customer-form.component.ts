import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Customer } from '../customer-modal';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  @ViewChild('myDOMElement', { static: true })
  MyDOMElement!: ElementRef;

  @Output() onClick= new EventEmitter<any>();
  @Input() updateddata!:any;
  public user!: any;
  public disabledFlag1:boolean=false;
  public statusData = [
    { name: 'Please Select Status',value:''},
    { name: 'Open',value:'Open'},
    {name: 'Error',value:'Error'},
    { name: 'Inactive',value:'Inactive'},
    {name: 'Sucess',value:'Sucess'}
];
  constructor(private formBuilder: FormBuilder) {
    this.formcreate()
  }

  ngOnInit(): void {
console.log("data",this.updateddata)
  if(this.updateddata)
  {
    this.oninitdata()
      
  }
  else{
    this.MyDOMElement.nativeElement.innerText="Submit";
    
  }
  }
  
  loginUser() {

    if(this.updateddata)
    { 
      this.onClick.emit({data: this.user.value,name:"update",id:this.updateddata.id,show:false})
        this.clearformvalue()
        
    }
    else{
    
      this.onClick.emit(
        {data: this.user.value,name:"insert",show:false})
        this.clearformvalue()
    }
  }
  cancel(){
    if(this.user.value.name || this.user.value.descrption ||  this.user.value.status || this.user.value.rate  || this.user.value.balance  )
    {
      {
        const response=confirm("Are you sure you wnat to cancel")
        if(response)
      {
        this.clearformvalue()
        this.onClick.emit({show:false})
      }
      }
    }else{
    this.onClick.emit({show:false})}
  }
 
  clearformvalue(){
    this.user.reset()  
  }
  oninitdata(){
    this.MyDOMElement.nativeElement.innerText="Update";
    
     this.user.patchValue(
       {'name':this.updateddata.name,'descrption':this.updateddata.descrption,'status':this.updateddata.status,'rate':this.updateddata.rate,"balance":this.updateddata.balance,
      }
    
   ) 
  }
  formcreate(){
    this.user = this.formBuilder.group({
      name: ['', [Validators.required,Validators.maxLength(25),Validators.minLength(3)]],
      descrption: ['', [Validators.required,Validators.maxLength(125),Validators.minLength(3)]],
      status: ['', [Validators.required]],
      rate: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      balance: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
   
    },{ updateOn: "blur" });
   
  }
}


