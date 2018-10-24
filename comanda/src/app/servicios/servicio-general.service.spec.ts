import { TestBed, inject } from '@angular/core/testing';

import { ServicioGeneralService } from './servicio-general.service';

describe('ServicioGeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioGeneralService]
    });
  });

  it('should be created', inject([ServicioGeneralService], (service: ServicioGeneralService) => {
    expect(service).toBeTruthy();
  }));
});
