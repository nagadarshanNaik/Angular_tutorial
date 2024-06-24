import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  userDetails: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  onSubmitUser(user: User) {
    this.userDetails.emit(user);
  }
}
