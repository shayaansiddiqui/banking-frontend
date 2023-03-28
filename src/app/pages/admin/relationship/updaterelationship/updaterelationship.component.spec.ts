import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterelationshipComponent } from './updaterelationship.component';

describe('UpdaterelationshipComponent', () => {
  let component: UpdaterelationshipComponent;
  let fixture: ComponentFixture<UpdaterelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterelationshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
