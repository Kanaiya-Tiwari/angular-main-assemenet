import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, param:any): any {
    if(!param)
    {
      return value;
    }
   
    
       var datavalue=value.filter((item:any)=>{
      
      
 
      
        let data=  item.name.includes(param) || item.descrption.includes(param) || item.status.includes(param) ||  item.id.toString().includes(param)|| item.rate.includes(param) || item.balance.includes(param) ;
      
        return data;
       
     })
     if(datavalue.length===0){
      
      // datavalue={message:"No record found"};
    
      // datavalue.length=0;
     datavalue.push({message:"No record found"})
     return datavalue
    } 
    
     return datavalue;
  }

}
