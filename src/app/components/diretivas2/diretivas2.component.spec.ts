import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretivas2Component } from './diretivas2.component';

describe('Diretivas2Component', () => {
  let component: Diretivas2Component;
  let fixture: ComponentFixture<Diretivas2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diretivas2Component]
    });
    fixture = TestBed.createComponent(Diretivas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
