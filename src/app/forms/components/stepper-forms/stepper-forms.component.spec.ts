import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFormsComponent } from './stepper-forms.component';

describe('StepperFormsComponent', () => {
  let component: StepperFormsComponent;
  let fixture: ComponentFixture<StepperFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
