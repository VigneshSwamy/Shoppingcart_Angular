import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.scss']
})
export class StarratingComponent implements OnInit {

  // stars: number[] = [1, 2, 3, 4, 5];
  // selectedValue: number;
  // constructor() { }
  

  // ngOnInit() {
  // }
  // countStar(star) {
  //   this.selectedValue = star;
  //   alert("You have given "+star+" rating")
  //   // console.log('Value of star', star);
  // }

  @Input() max: number;
  @Input() setRating : number;
  @Output() onRating = new EventEmitter<number>();
  @Output() chagedvalue = new EventEmitter<number>();
  

  public maxItem: any[];
  public ratedCount: number;

  constructor() {
    this.ratedCount = 0;
  }

  ngOnInit() {
    this.ratedCount = this.setRating;
    this.maxItem = [];
    for (let i = 0; i < this.max; i++) {
      this.maxItem.push(i + 1);
    }
  }

  public toggleRating(s: number): void {
    this.ratedCount = s;
    this.onRating.emit(this.ratedCount);
    this.chagedvalue.emit(this.ratedCount);
    console.log("changed by me", this.chagedvalue);
    alert("You have given "+ this.ratedCount+" star rating");
  }

}

