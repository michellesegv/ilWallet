import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTransferenciaComponent } from './registrar-transferencia.component';

describe('RegistrarTransferenciaComponent', () => {
  let component: RegistrarTransferenciaComponent;
  let fixture: ComponentFixture<RegistrarTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
