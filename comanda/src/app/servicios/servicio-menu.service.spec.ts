import { TestBed, inject } from '@angular/core/testing';

import { ServicioMenuService } from './servicio-menu.service';

describe('ServicioMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioMenuService]
    });
  });

  it('should be created', inject([ServicioMenuService], (service: ServicioMenuService) => {
    expect(service).toBeTruthy();
  }));
});
