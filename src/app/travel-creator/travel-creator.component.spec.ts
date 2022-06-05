import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCreatorComponent } from './travel-creator.component';

describe('TravelCreatorComponent', () => {
  let component: TravelCreatorComponent;
  let fixture: ComponentFixture<TravelCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
