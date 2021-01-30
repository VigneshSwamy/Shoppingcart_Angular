import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cartValue:number=0;
  private messagesource = new BehaviorSubject<number>(this.cartValue);
  currentmessage  = this.messagesource.asObservable();

  constructor() {    
  
  }
  ngOnInit(){
   
  }

 
// createObservableService(): Observable<number>{     
//        return new Observable(
//       observer => {  
//              observer.next(this.cartValue++);  
//     });
//   }

  changemessage(message:number){
    this.messagesource.next(message);
    console.log("message value",message);
  }

}
