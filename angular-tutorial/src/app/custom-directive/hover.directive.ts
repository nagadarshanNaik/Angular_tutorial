import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#white';
  @HostBinding('style.color') textColor: string = '#282828';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor = '#282828';
    this.textColor = 'white';
    this.border = '2px solid #282828';
  }
  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor = 'white';
    this.textColor = '#282828';
    this.border = 'none';
  }

}
