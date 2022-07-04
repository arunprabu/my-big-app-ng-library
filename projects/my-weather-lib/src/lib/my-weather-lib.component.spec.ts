import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeatherLibComponent } from './my-weather-lib.component';

describe('MyWeatherLibComponent', () => {
  let component: MyWeatherLibComponent;
  let fixture: ComponentFixture<MyWeatherLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWeatherLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWeatherLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
