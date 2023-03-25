import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AuthenticationService} from './authentication.service';

describe('AuthenticationService', () => {
	let service: AuthenticationService;
	let httptestcontroller: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule,
				HttpTestingController
			],
		});
		service = TestBed.inject(AuthenticationService);

	})
	// it('should be created', () => {
	//   expect(service).toBeTruthy();
	// });
});
