import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicadorComponent } from './multiplicador.component';

describe('MultiplicadorComponent', () => {
  let component: MultiplicadorComponent;
  let fixture: ComponentFixture<MultiplicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
