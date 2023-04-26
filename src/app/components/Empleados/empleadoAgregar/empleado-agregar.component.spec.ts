import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAgregarComponent } from './empleado-agregar.component';

describe('EmpleadoAgregarComponent', () => {
  let component: EmpleadoAgregarComponent;
  let fixture: ComponentFixture<EmpleadoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
