import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoApplyAuthComponent } from './no-apply-auth.component';

describe('NoApplyAuthComponent', () => {
  let component: NoApplyAuthComponent;
  let fixture: ComponentFixture<NoApplyAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoApplyAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoApplyAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
