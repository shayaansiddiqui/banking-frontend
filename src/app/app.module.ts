import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ToastComponent} from './toast/toast.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LandingComponent} from './pages/landing/landing.component';
import {HeaderComponent} from './common/header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FooterComponent} from './common/footer/footer.component';
import {DepositComponent} from './pages/dashboard/deposit/deposit.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SummaryComponent} from './pages/dashboard/summary/summary.component';
import {TransactionComponent} from './pages/dashboard/transaction/transaction.component';
import {ListcompanyComponent} from './pages/admin/companies/listcompany/listcompany.component';
import {ListrelationshipComponent} from './pages/admin/relationship/listrelationship/listrelationship.component';
import {AddrelationshipComponent} from './pages/admin/relationship/addrelationship/addrelationship.component';
import {UpdatecompanyComponent} from './pages/admin/companies/updatecompany/updatecompany.component';
import {CreatecompanyComponent} from './pages/admin/companies/createcompany/createcompany.component';
import {UpdaterelationshipComponent} from './pages/admin/relationship/updaterelationship/updaterelationship.component';
import {SpendComponent} from './pages/spend/spend.component';
import {TransferComponent} from './pages/transfer/transfer.component';
import {SavingComponent} from './pages/saving/saving.component';
import {ForgotComponent} from './pages/forgot/forgot.component';
import {UpdatePasswordComponent} from './update-password/update-password.component';
import {ToysDashboardComponent} from './pages/toys-dashboard/toys-dashboard.component';
import {ReceiptComponent} from './pages/receipt/receipt.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegistrationComponent,
		ToastComponent,
		LandingComponent,
		HeaderComponent,
		FooterComponent,
		DepositComponent,
		DashboardComponent,
		SummaryComponent,
		TransactionComponent,
		ListcompanyComponent,
		ListrelationshipComponent,
		AddrelationshipComponent,
		UpdatecompanyComponent,
		CreatecompanyComponent,
		UpdaterelationshipComponent,
		SpendComponent,
		TransferComponent,
		SavingComponent,
		ForgotComponent,
		UpdatePasswordComponent,
		ToysDashboardComponent,
		ReceiptComponent

	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		NgClass,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatDialogModule,
		ReactiveFormsModule,
		BsDatepickerModule.forRoot(),
		MatAutocompleteModule,
		HttpClientModule
	],
	providers: [
		HttpClient
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}
