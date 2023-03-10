import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HttpHeaders  } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ToastComponent,
    LandingComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgClass,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
