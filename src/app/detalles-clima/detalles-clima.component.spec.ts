import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClimaComponent } from './detalles-clima.component';

describe('DetallesClimaComponent', () => {
  let component: DetallesClimaComponent;
  let fixture: ComponentFixture<DetallesClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});