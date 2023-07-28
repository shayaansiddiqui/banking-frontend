import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from './pages/landing/landing.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {TransactionComponent} from "./pages/dashboard/transaction/transaction.component";
import {SummaryComponent} from "./pages/dashboard/summary/summary.component";
import {DepositComponent} from "./pages/dashboard/deposit/deposit.component";
import { SpendComponent } from './pages/spend/spend.component';
import { SavingComponent } from './pages/saving/saving.component';


//the path property should have names starting with a lowerCase (previously all names started with a upperCase character) (ex: Landing -> landing)
//to be able to pass the params to a route just add /:nameOfYourVariable and you will be able to retrieve it using the ActivatedRouter (Please see transaction.component.ts to check on how to retrieve data from routes)
const routes: Routes = [

	{path: 'registration', component: RegistrationComponent, data: {animation: 'isDown'}},
	{path: 'login', component: LoginComponent, data: {animation: 'isUp'}},
	{path: 'landing', component: LandingComponent},
	{path: 'spend', component: SpendComponent},
	{path: 'saving', component: SavingComponent},
	{
		path: 'dashboard', component: DashboardComponent, children: [
			{
				path: "transaction/:id/:accountType",
				component: TransactionComponent
			},
			{
				path: "summary/:id",
				component: SummaryComponent,

			}, {
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



