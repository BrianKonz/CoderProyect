import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from './usuario-services.service';
import { of } from 'rxjs';

describe('UsuarioServicesService', () => {
  let httpClientSpy: { get: jasmine.Spy }
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UsuarioService(httpClientSpy as any)

  });

  it('Se crea el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

});
