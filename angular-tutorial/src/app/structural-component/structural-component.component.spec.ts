import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralComponentComponent } from './structural-component.component';

describe('StructuralComponentComponent', () => {
  let component: StructuralComponentComponent;
  let fixture: ComponentFixture<StructuralComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
