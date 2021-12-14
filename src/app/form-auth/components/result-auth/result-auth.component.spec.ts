import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAuthComponent } from './result-auth.component';

describe('ResultAuthComponent', () => {
  let component: ResultAuthComponent;
  let fixture: ComponentFixture<ResultAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
