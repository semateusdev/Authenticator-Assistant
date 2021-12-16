import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanAuthResultComponent } from './mean-auth-result.component';

describe('MeanAuthResultComponent', () => {
  let component: MeanAuthResultComponent;
  let fixture: ComponentFixture<MeanAuthResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanAuthResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanAuthResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
