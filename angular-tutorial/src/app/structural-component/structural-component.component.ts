import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IfDirective } from '../custom-directive/custom-structural-directive/if.directive';
import { SubscribeService } from '../service/subscribe.service';

@Component({
  selector: 'app-structural-component',
  standalone: true,
  imports: [CommonModule, IfDirective],
  templateUrl: './structural-component.component.html',
  styleUrl: './structural-component.component.scss',
  providers:[SubscribeService]
})
export class StructuralComponentComponent {
  display: boolean = false;
  constructor(private subscribeService: SubscribeService) {}
  onExtent() {
    this.display = !this.display;
  }
  onSubscribe() {
    this.subscribeService.onSbscribe();
  }
}
