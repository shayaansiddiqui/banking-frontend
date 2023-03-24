import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AppComponent} from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from './pages/landing/landing.component';
import {HeaderComponent} from './common/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  {path: '', redirectTo: 'Landing', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent, data: {animation: 'isDown'}},
  {path: 'login', component: LoginComponent, data: {animation: 'isUp'}},
  {path: 'Landing', component: LandingComponent},
  {path: 'Header', component: HeaderComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Deposit', component: DepositComponent},
  { path: 'Transaction', component: TransactionComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})


export class AppRoutingModule {

}



