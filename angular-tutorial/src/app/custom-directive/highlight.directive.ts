import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'highlight-component')
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight-component')
  }
}
