import { TestBed } from '@angular/core/testing';

import { MyWeatherLibService } from './my-weather-lib.service';

describe('MyWeatherLibService', () => {
  let service: MyWeatherLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWeatherLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
