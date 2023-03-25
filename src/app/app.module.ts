import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {AppRoutingModule} from "./app-routing.module";
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {ToastComponent} from './toast/toast.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LandingComponent} from './pages/landing/landing.component';
import {HeaderComponent} from './common/header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterComponent } from './common/footer/footer.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SummaryComponent } from './pages/dashboard/summary/summary.component';
import { TransactionComponent } from './pages/dashboard/transaction/transaction.component';

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
    TransactionComponent
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
