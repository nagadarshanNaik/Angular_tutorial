import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent1Component } from './child-component-1/child-component-1.component';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { StructuralComponentComponent } from './structural-component/structural-component.component';
import { ExObservablesComponent } from './Observable/ex-observables/ex-observables.component';
import { CreateTaskComponent } from './example-for-subjects/create-task/create-task.component';
import { ShowTaskComponent } from './example-for-subjects/show-task/show-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    ChildComponent1Component,
    StructuralComponentComponent,
    ExObservablesComponent,
    CreateTaskComponent,
    ShowTaskComponent
  ],
})
export class AppComponent {
  title = 'angular-tutorial';
}
