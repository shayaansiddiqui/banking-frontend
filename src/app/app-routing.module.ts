import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from './pages/landing/landing.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {TransactionComponent} from "./pages/dashboard/transaction/transaction.component";
import {SummaryComponent} from "./pages/dashboard/summary/summary.component";
import {DepositComponent} from "./pages/dashboard/deposit/deposit.component";


const routes: Routes = [

	{path: 'registration', component: RegistrationComponent, data: {animation: 'isDown'}},
	{path: 'login', component: LoginComponent, data: {animation: 'isUp'}},
	{path: 'landing', component: LandingComponent},
	{path: 'dashboard', component: DashboardComponent, children: [
			{
				path: "transaction/:id/:accountType",
				component: TransactionComponent
			},
			{
				path: "summary/:id",
				component: SummaryComponent,

			},  {
				path: "deposit",
				component: DepositComponent,
			}]
	},
	{path: '', redirectTo: 'landing', pathMatch: "full"},

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



