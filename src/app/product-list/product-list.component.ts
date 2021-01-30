import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
import  * as productsdata  from  '../../assets/productsJson.json';
import { HttpClient } from "@angular/common/http";
import { ProductRatingComponent } from "../../app/product-rating/product-rating.component";
import {CartserviceService} from "../service/cartservice.service"
import {Observable,Subscription} from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router'
import { AcceptedReviewPipePipe } from './accepted-review-pipe.pipe';



interface Todo {
  id: number;
  name: string;
  striked: boolean
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  private id = 0;
  private inputValue = "";
  isStriked: boolean = false;
  Firstloop: boolean = true;
  Secondloop: boolean = true;
  Thirdloop: boolean = true;
  productlist: any = [];
  productrating1: number;
  productrating2: number;
  productrating3: number;
  products: any = [];
  changedoutputvalue1: number;
  changedoutputvalue2: number;
  changedoutputvalue3: number;
  availableproducts: boolean = false;
  closeResult: string;
  lineThrough: boolean = false;
  list: Todo[] = [];
  slectedid: number;
  newArray: Todo[] = [];
  cartcount: number;
  storevalue: number;
  theCheckbox: any;
  data: any;

  constructor(
    private httpClient: HttpClient,
    private cartservice: CartserviceService,
    private _router: Router,
    private activatedroute: ActivatedRoute,
    private filterreview: AcceptedReviewPipePipe
  ) {}
  public onRating(rating: number): void {
    console.log(rating);
  }
  ngOnInit() {
    this.httpClient.get("assets/productsJson.json").subscribe((data) => {
      this.products = data;
      this.productlist = this.products;
      console.log(this.products);
      for (var index in this.products) {
        this.productlist[index] = this.products[index];
        if (index == "0") {
          this.productrating1 = this.productlist[index].rating;
        } else if (index == "1") {
          this.productrating2 = this.productlist[index].rating;
        } else {
          this.productrating3 = this.productlist[index].rating;
        }
      }
      console.log("product1", this.productrating1);
      console.log("product2 ", this.productrating2);
      console.log("product3 ", this.productrating3);
    });
  }

  filterReview(check: Event) {
    console.log("checbox checked", check, );
   this.data = this.filterreview.transform(this.theCheckbox);
  }

  reviews=["Good product", "Nice one"];
  addReview(newReview:string){
  if (newReview) {
    this.reviews.push(newReview);
  }
}

  
  customFunc(data) {
    this.changedoutputvalue1 = data;
    this.Firstloop = false;
  }
  customFunc2(data) {
    this.changedoutputvalue2 = data;
    this.Secondloop = false;
  }
  customFunc3(data) {
    this.changedoutputvalue3 = data;
    this.Thirdloop = false;
  }

  onclickprd(productid: number) {
    this._router.navigate(["/product-detail", productid]);
  }

  addreviewlist() {
    //console.log("new value for review",newreview);
    if (!this.inputValue) {
      return;
    }

    this.list = this.list.concat({
      id: ++this.id,
      name: this.inputValue,
      striked: this.isStriked,
    });
    this.inputValue = "";
    //this.list.push(newreview);
  }

  toggleTodo(id: number) {
    console.log("clicked id", id);
    document.getElementById("span-" + id).style.textDecoration = "line-through";
    document.getElementById("btn-" + id).style.visibility = "hidden";
  }
  onbuynow() {
    // this.cartservice.createObservableService().subscribe( data => this.cartcount = data );
    // this.storevalue=this.cartcount;
    this.cartservice.currentmessage.subscribe(
      (message) => (this.cartcount = message)
    );
    this.cartcount++;
    this.cartservice.changemessage(this.cartcount);
  }
}
