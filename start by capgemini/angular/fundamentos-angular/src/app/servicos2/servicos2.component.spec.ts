import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicos2Component } from './servicos2.component';

describe('Servicos2Component', () => {
  let component: Servicos2Component;
  let fixture: ComponentFixture<Servicos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
