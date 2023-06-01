import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroAppComponent } from './terceiro-app.component';

describe('TerceiroAppComponent', () => {
  let component: TerceiroAppComponent;
  let fixture: ComponentFixture<TerceiroAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerceiroAppComponent]
    });
    fixture = TestBed.createComponent(TerceiroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
