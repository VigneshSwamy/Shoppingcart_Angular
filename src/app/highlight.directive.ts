import {  Directive, 
  ElementRef, 
  Renderer2, 
  OnInit,
  HostListener,
  HostBinding,
  Input   } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef, 
    private renderer:Renderer2) {
   
   }
   ngOninit(){
    this.color = this.defaultColor;
   }
   @Input() defaultColor;
    @Input() highlight: string= 'black';
    @HostBinding('style.color') color:string = this.defaultColor;


    @HostListener('mouseenter') mouseover(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey');
      this.color=this.highlight;
    }

    @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
      this.color=this.highlight;
    }



}
