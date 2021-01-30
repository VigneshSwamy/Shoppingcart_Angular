import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductserviceService } from '../service/productservice.service';
import { HttpClient } from "@angular/common/http";
import { CartserviceService } from "../service/cartservice.service";
import { AcceptedReviewPipePipe } from "../product-list/accepted-review-pipe.pipe";


interface Todo {
  id: number;
  name: string;
  striked: boolean;
}
@Component({
  selector: "app-productdetail",
  templateUrl: "./productdetail.component.html",
  styleUrls: ["./productdetail.component.css"],
})
export class ProductdetailComponent implements OnInit {
  theCheckbox: any;
  data: any;
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

  selectedproduct: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private prdservice: ProductserviceService,
    private httpClient: HttpClient,
    private cartservice: CartserviceService,
    private _router: Router,
    private filterreview: AcceptedReviewPipePipe
  ) {}

  ngOnInit() {
    const id = +this.activatedroute.snapshot.params["id"];
    console.log("ID clicked", id);
    this.selectedproduct = this.prdservice.getproductbyId(id);
    console.log("selected product", this.selectedproduct);
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
  filterReview(check: Event) {
    console.log("checbox checked", check);
    this.data = this.filterreview.transform(this.theCheckbox);
  }

  reviews = ["Good product", "Nice one"];
  addReview(newReview: string) {
    if (newReview) {
      this.reviews.push(newReview);
    }
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
