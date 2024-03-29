import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SummaryComponent} from "./summary/summary.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {DepositComponent} from "./deposit/deposit.component";
import {DashboardComponent} from "./dashboard.component";


//When doing a lazy loading just specify the routes directly without wrapping them into a children wrapper. To add dynamic params just add after each / :nameOfVariable and access it as it shown on the Transaction and Summary component using the ActivatedRoute
const routes: Routes = [{
	path: 'dashboard',
	component: DashboardComponent,
	children: [
		{
			path: "transaction",
			component: TransactionComponent
		},
		{
			path: "transaction/:id",
			component: TransactionComponent
		},
		{
			path: "transaction/:id/:accountType",
			component: TransactionComponent
		},
		{
			path: "summary",
			component: SummaryComponent,
			pathMatch: "full"
		},
		{
			path: "summary/:id",
			component: SummaryComponent,
			pathMatch: "full"
		}, {
			path: "deposit",
			component: DepositComponent,
			pathMatch: "full"
		}]
}


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {
}
