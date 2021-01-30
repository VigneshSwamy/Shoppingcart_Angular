import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-starratingprd3',
  templateUrl: './starratingprd3.component.html',
  styleUrls: ['./starratingprd3.component.scss']
})
export class Starratingprd3Component implements OnInit {

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

