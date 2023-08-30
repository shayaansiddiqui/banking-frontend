import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysDashboardComponent } from './toys-dashboard.component';

describe('ToysDashboardComponent', () => {
  let component: ToysDashboardComponent;
  let fixture: ComponentFixture<ToysDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
