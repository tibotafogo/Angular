import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoAppComponent } from './segundo-app.component';

describe('SegundoAppComponent', () => {
  let component: SegundoAppComponent;
  let fixture: ComponentFixture<SegundoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoAppComponent]
    });
    fixture = TestBed.createComponent(SegundoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
