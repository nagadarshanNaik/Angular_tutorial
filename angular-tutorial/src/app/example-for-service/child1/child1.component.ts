import { Component } from '@angular/core';
import { TransferService } from '../../service/transfer.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component {
  user: User = {
    name: 'Nagadarshan C Naik',
    gender: 'M',
    age:24,
  }
  constructor(private transService: TransferService) {}
  onSubmit() {
    this.transService.onSubmitUser(this.user);
  }
}
