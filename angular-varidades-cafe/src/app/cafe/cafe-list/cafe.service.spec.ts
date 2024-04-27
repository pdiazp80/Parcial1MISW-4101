/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

//caonfiguración service cafe
describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });
  });

  //pruebas de creación del servicio
  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
