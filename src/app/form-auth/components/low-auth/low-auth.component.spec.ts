import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowAuthComponent } from './low-auth.component';

describe('LowAuthComponent', () => {
  let component: LowAuthComponent;
  let fixture: ComponentFixture<LowAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
