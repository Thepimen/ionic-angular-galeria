import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeria2Component } from './galeria2.component';

describe('Galeria2Component', () => {
  let component: Galeria2Component;
  let fixture: ComponentFixture<Galeria2Component>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Galeria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
