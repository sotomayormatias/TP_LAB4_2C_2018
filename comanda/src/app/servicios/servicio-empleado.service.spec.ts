import { TestBed, inject } from '@angular/core/testing';

import { ServicioEmpleadoService } from './servicio-empleado.service';

describe('ServicioVehiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioEmpleadoService]
    });
  });

  it('should be created', inject([ServicioEmpleadoService], (service: ServicioEmpleadoService) => {
    expect(service).toBeTruthy();
  }));
});
