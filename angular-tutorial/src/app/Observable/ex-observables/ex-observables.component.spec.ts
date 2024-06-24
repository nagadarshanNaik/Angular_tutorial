import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExObservablesComponent } from './ex-observables.component';

describe('ExObservablesComponent', () => {
  let component: ExObservablesComponent;
  let fixture: ComponentFixture<ExObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExObservablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
