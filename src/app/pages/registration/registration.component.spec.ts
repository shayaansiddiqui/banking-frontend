
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ToastComponent } from 'src/app/toast/toast.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {RegistrationService} from "../../shared/registration.service";
import { By } from '@angular/platform-browser';

// describe('RegistrationComponent', () => {
//   let component: RegistrationComponent;
//   let fixture: ComponentFixture<RegistrationComponent>;
//   let el: HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule,
//         RouterTestingModule,
//         MatDialogModule,
//         MatAutocompleteModule,
//         ReactiveFormsModule,
//         FormsModule,
//         BsDatepickerModule.forRoot()  
//       ],
//       declarations: [ RegistrationComponent,
//         ToastComponent,
//         RegistrationService
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(RegistrationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should set submitted to true', () => {
//   //   component.onSubmit();
//   //   expect(component.submitted).toBeTruthy();
//   // });
  
//   // it('should call the onsubmit method', () => {
//   //   fixture.detectChanges();
//   //   spyOn(component, 'onSubmit');
//   //   el = fixture.debugElement.query(By.css('button')).nativeElement;
//   //   el.click();
//   //   expect(component.onSubmit).toHaveBeenCalledTimes(0);
//   // });

//   // it('form should be valid', () => {
//   //   component.formModal.controls['firstName'].setValue('test');
//   //   component.formModal.controls['lastName'].setValue('testing');
//   //   component.formModal.controls['email'].setValue('test@mail.com');
//   //   component.formModal.controls['password'].setValue('123456');
//   //   component.formModal.controls['dateOfBirth'].setValue('12/23/1997');
//   //   component.formModal.controls['phone'].setValue('1234567890');
//   //   component.formModal.controls['address'].setValue('Mohali');
//   //   component.formModal.controls['city'].setValue('Kharar');
//   //   component.formModal.controls['state'].setValue('Punjab');
//   //   component.formModal.controls['postalCode'].setValue('140615');
//   //   expect(component.formModal.valid).toBeTruthy();

//   // });
// });
