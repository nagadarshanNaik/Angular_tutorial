import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSbscribe(){
    alert("subscribed successfully");
  }
}
