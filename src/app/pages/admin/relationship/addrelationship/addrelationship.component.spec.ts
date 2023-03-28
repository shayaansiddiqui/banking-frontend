import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrelationshipComponent } from './addrelationship.component';

describe('AddrelationshipComponent', () => {
  let component: AddrelationshipComponent;
  let fixture: ComponentFixture<AddrelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrelationshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
