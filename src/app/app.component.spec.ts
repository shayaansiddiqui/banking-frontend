import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {LandingComponent} from './pages/landing/landing.component';
import {RouterOutlet} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterOutlet,
				BrowserAnimationsModule],
			declarations: [
				AppComponent,
				HeaderComponent,
				LandingComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'banking-frontend'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('BankingFrontend');
	});

	// it('should render title', () => {
	//   const fixture = TestBed.createComponent(AppComponent);
	//   fixture.detectChanges();
	//   const compiled = fixture.nativeElement as HTMLElement;
	//   expect(compiled.querySelector('h1')?.textContent).toContain('bankingFrontend');
	// });


});


