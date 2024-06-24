import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HighlightDirective } from '../custom-directive/highlight.directive';
import { HoverDirective } from '../custom-directive/hover.directive';

@Component({
  selector: 'app-child-component-1',
  standalone: true,
  imports: [CommonModule,HighlightDirective,HoverDirective],
  templateUrl: './child-component-1.component.html',
  styleUrl: './child-component-1.component.scss'
})
export class ChildComponent1Component implements OnChanges{
  @Input() content: any;
    constructor(){
    }
    ngOnChanges(changes:SimpleChanges){
      console.log(this.content);
    }
}
