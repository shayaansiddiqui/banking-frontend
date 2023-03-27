import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from './pages/landing/landing.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';


const routes: Routes = [

	{path: 'registration', component: RegistrationComponent, data: {animation: 'isDown'}},
	{path: 'login', component: LoginComponent, data: {animation: 'isUp'}},
	{path: 'landing', component: LandingComponent},
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard/dashboard.routing.module').then((m) => m.DashboardRoutingModule),
		// canActivate: [AuthGuard],
		// data: {roles: [Role.StandardUser, Role.StandardAdministrator, Role.StandardAdministrator]}
	},
	{path: 'dashboard', component: DashboardComponent},
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



