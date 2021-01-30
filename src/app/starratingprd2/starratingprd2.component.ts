import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-starratingprd2',
  templateUrl: './starratingprd2.component.html',
  styleUrls: ['./starratingprd2.component.scss']
})
export class Starratingprd2Component implements OnInit {

  @Input() max: number;
  @Input() setRating : number;
  @Output() onRating = new EventEmitter<number>();
  @Output() changedvalue = new EventEmitter<number>();
  

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
    this.changedvalue.emit(this.ratedCount);
    console.log("changed by me", this.ratedCount);
    alert("You have given "+ this.ratedCount+" star rating");
  }

}

