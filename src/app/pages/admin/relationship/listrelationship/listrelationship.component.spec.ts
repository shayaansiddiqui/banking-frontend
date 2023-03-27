import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrelationshipComponent } from './listrelationship.component';

describe('ListrelationshipComponent', () => {
  let component: ListrelationshipComponent;
  let fixture: ComponentFixture<ListrelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrelationshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
