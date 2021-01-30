import { Component, OnInit,Input } from '@angular/core';
import {CartserviceService} from "../service/cartservice.service"
import {Observable, Subject} from 'rxjs';
import {ProductListComponent} from '../product-list/product-list.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  // @Input()storevalue:number;
  message:number;
  constructor(private  cartservice: CartserviceService) { 
    
}
  ngOnInit() { 
   this.cartservice.currentmessage.subscribe(message =>this.message = message)
  }
  inputValue:string;
  menuItems:any[] = [{"title":"Home","showIcon":false,"cssClass":"none"},{"title":"Contact us","showIcon":true,"cssClass":"fa fa-address-card"},{"title":"Follow us:","showIcon":true,"cssClass":"fab fa-twitter"},{"title":"Cart:","showIcon":true,"cssClass":"fab fa-shopping-cart"}];

}
