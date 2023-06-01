import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroAppComponent } from './primeiro-app.component';

describe('PrimeiroAppComponent', () => {
  let component: PrimeiroAppComponent;
  let fixture: ComponentFixture<PrimeiroAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiroAppComponent]
    });
    fixture = TestBed.createComponent(PrimeiroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
