import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOkResultComponent } from './auth-ok-result.component';

describe('AuthOkResultComponent', () => {
  let component: AuthOkResultComponent;
  let fixture: ComponentFixture<AuthOkResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOkResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOkResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
