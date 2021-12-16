import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongAuthResultComponent } from './strong-auth-result.component';

describe('StrongAuthResultComponent', () => {
  let component: StrongAuthResultComponent;
  let fixture: ComponentFixture<StrongAuthResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongAuthResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongAuthResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
