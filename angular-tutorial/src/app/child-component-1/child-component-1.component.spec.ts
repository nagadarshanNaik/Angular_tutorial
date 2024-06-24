import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent1Component } from './child-component-1.component';

describe('ChildComponent1Component', () => {
  let component: ChildComponent1Component;
  let fixture: ComponentFixture<ChildComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
