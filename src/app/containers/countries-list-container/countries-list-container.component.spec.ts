import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListContainerComponent } from './countries-list-container.component';

describe('CountriesListContainerComponent', () => {
  let component: CountriesListContainerComponent;
  let fixture: ComponentFixture<CountriesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
