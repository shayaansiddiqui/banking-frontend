import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendComponent } from './spend.component';

describe('SpendComponent', () => {
  let component: SpendComponent;
  let fixture: ComponentFixture<SpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
