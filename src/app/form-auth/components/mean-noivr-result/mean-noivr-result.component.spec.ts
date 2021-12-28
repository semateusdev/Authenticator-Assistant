import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanNoivrResultComponent } from './mean-noivr-result.component';

describe('MeanNoivrResultComponent', () => {
  let component: MeanNoivrResultComponent;
  let fixture: ComponentFixture<MeanNoivrResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanNoivrResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanNoivrResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
