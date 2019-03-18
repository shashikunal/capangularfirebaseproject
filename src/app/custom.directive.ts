import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector : '[manu]'
})

export class customDirective {
@HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(el:ElementRef){
    el.nativeElement.style.background = "yellow";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.border = "2px solid red"
  }

  // @HostListener('click') clickData(){
  //   window.alert('manu is clicked');
  // }

  @HostListener('mouseenter')mouseEnter(){
    console.log('mouse entered');
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave')mouseLeave(){
    console.log('mouse leave');
    this.backgroundColor = 'green';
  }

}
