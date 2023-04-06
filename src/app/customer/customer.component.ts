import { Component } from '@angular/core';
import { CustomerServiceService } from './customer-service.service';
import { Customer } from './customer-modal';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public dataValueOfApi!:any;
  public updateddata!:any;
  public show:boolean=false;
  constructor(private Service:CustomerServiceService) {}
  ngOnInit(): void {
    // api call  on compoenent load
    this.getCustomer();
  }
  getCustomer(){
    this.Service.getCustomer().subscribe((response:Customer)=>{
  if(response)
  {
    this.dataValueOfApi=response;
  }

    })
    }
    getdata(data:any){
      if(data.name==='insert')
      {
       
        this.Service.addCustomer(data.data).subscribe((response:Customer)=>{
          if(response){
            this.getCustomer();
            this.show=data.show;
          }
          
       });
      }
      else if(data.name==='update') {
        console.log(data.id);
        this.Service.updateCustomer(data.data,data.id).subscribe((response:Customer)=>{
          if(response){
          this.getCustomer();
          this.show=data.show;
          this.updateddata=""
          }
       });
      }
      else{
        this.show=data.show;
        this.updateddata="";
      }
    
    }
    getid(data:any)
    {
      if(data.name==="delete")
     {
      this.Service.deleteCustomer(data.id).subscribe((response:Customer)=>{
        if(response){
        this.getCustomer();
        alert("data deleted");
        }
     });
    }
    else if(data.name==="edit") {
      
      this.Service.getCustomerByID(data.id).subscribe((response:Customer)=>{
        if(response){
        this.updateddata=response;
    
       this.show=data.show;
        }
    })}
    else{
this.show=data.show;
    }
    }
}
