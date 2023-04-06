import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropdownPipe'
})
export class DropdownPipePipe implements PipeTransform {
 
  
  transform(value: any, param:any): any {
   
    if(!param)
    {
      return value;
    }
   
    
       var datavalue=value.filter((item:any)=>{
      
      
 
      
        let data=  item.status.includes(param)  ;
        return data;
     })
     
     return datavalue;
     }


}
