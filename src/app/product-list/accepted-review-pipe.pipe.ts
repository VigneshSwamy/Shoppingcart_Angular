import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "acceptedReviewPipe",
})
export class AcceptedReviewPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log("pipe value", value);
    var elements = document.getElementsByClassName("strike");
    if (value) {
      for (let index = 0; index < elements.length; index++) {
        elements[index].parentElement.className = "rejReview";
      }
    } else {
      for (let index = 0; index < elements.length; index++) {
        elements[index].parentElement.className = "";
      }
    }
  }
}
