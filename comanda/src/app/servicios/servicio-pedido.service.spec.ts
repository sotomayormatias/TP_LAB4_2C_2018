import { TestBed, inject } from '@angular/core/testing';

import { ServicioPedidoService } from './servicio-pedido.service';

describe('ServicioPedidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioPedidoService]
    });
  });

  it('should be created', inject([ServicioPedidoService], (service: ServicioPedidoService) => {
    expect(service).toBeTruthy();
  }));
});
