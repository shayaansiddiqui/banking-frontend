import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from 'src/app/shared/login.service';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let el: HTMLElement;
	//let validUser: any;
	//const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);


	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [
				{
					provide: LoginService, useClass: LoginService
				}],
			imports: [MatDialogModule,
				HttpClientTestingModule,
				ReactiveFormsModule,
				FormsModule
			],
			declarations: [LoginComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		//fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});

