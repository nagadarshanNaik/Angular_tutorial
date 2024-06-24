import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-ex-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex-observables.component.html',
  styleUrl: './ex-observables.component.scss',
})
export class ExObservablesComponent {
  data: any[] = [];
  array1 = [1, 3, 5, 7, 4];
  // Observable
  myObservale = new Observable((observer) => {
    observer.next([1, 2, 3, 4, 5]); // emitting data using next method
  });

  // Observer : It listnes Observer or sibscribes.
  // this can take 3 function next, error and complete
  getAsyncData() {
    this.myObservale.subscribe((value: any) => {
      this.data = value;
    });
  }

  // Examples for data stream
  // streamOfData = new Observable((observer) => {
  //   setTimeout(() => {observer.next(1);}, 1000);
  //   setTimeout(() => {observer.next(2);}, 2000);
  //   setTimeout(() => {observer.error('Something went wrong');}, 3000);
  //   setTimeout(() => {observer.next(4);}, 4000);
  //   setTimeout(() => {observer.next(5);}, 5000);
  //   setTimeout(() => {observer.complete();}, 6000);
  // });

  // streamOfData = of(this.array1,"nagadarshan",22)
  streamOfData = from(this.array1);

  getStreamOfData() {
    this.streamOfData.subscribe({
      next: (value) => {
        this.data.push(value);
      },
      error: (err) => {
        alert('err');
      },
      complete: () => {
        alert('Sequence completed');
      },
    });
  }

  /* Using map and filter operator */

  array3 = [2, 4, 6, 7, 3, 9];
  newObservable = from(this.array3).pipe(map((val) => {
    return val * 5;
  }),
  filter((val: any) => {
    return val % 2 == 0;
  }));

  // transformedData = this.newObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val: any) => {
  //     return val % 2 == 0;
  //   })
  // );

  // filteredData = this.transformedData.pipe(filter((val)=>{
  //   return val%2==0;
  // }))

  getTransformedData() {
    this.newObservable.subscribe({
      next: (val) => {
        this.data.push(val);
      },
      error(err) {
        console.log('something went wrong');
      },
      complete() {
        console.log('data Tarnsfered');
      },
    });
  }
}
