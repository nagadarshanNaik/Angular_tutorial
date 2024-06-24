import { Component, Inject, OnInit } from '@angular/core';
import { TransferService } from '../../service/transfer.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
})
export class Child2Component implements OnInit {
  constructor() {}
  transService = Inject(TransferService);
  ngOnInit() {
    this.transService.onSubmitUser.subscribe(() => {});
  }
}
