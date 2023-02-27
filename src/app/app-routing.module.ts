import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'home', component: AppComponent  },
      { path: 'registration', component: RegistrationComponent  },
      ])
  ]
  
})
export class AppRoutingModule { }

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/home' },
//   { path: 'home', component: HomeComponent , data: {animation: 'Home'} },
//   { path: 'article/:id', component: ArticleComponent , data: {animation: 'Article'} },
//   ];
