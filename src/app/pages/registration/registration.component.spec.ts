<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressApiDto } from 'src/app/model/AddressApiDto';
=======
>>>>>>> 567d2d2a77ec948a1e4b796e908cad4c55c3653a

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ToastComponent } from 'src/app/toast/toast.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {RegistrationService} from "../../shared/registration.service";

describe('RegistrationComponent', () => {
  let apiModel : AddressApiDto[];
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ RegistrationComponent ],
      imports:[HttpClientTestingModule]

=======
      imports: [
        MatDialogModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot()  
      ],
      declarations: [ RegistrationComponent,
        ToastComponent,
        RegistrationService
      ]
>>>>>>> 567d2d2a77ec948a1e4b796e908cad4c55c3653a
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 });
