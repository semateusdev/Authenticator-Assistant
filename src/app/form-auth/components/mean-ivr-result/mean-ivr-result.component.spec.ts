import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanIvrResultComponent } from './mean-ivr-result.component';

describe('MeanIvrResultComponent', () => {
  let component: MeanIvrResultComponent;
  let fixture: ComponentFixture<MeanIvrResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanIvrResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanIvrResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
