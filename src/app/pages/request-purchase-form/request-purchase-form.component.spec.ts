import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestPurchaseFormComponent} from './request-purchase-form.component';

describe('RequestPurchaseFormComponent', () => {
	let component: RequestPurchaseFormComponent;
	let fixture: ComponentFixture<RequestPurchaseFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RequestPurchaseFormComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(RequestPurchaseFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
