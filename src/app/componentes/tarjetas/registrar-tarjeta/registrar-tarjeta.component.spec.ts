import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTarjetaComponent } from './registrar-tarjeta.component';

describe('RegistrarTarjetaComponent', () => {
  let component: RegistrarTarjetaComponent;
  let fixture: ComponentFixture<RegistrarTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
