import { Component } from '@angular/core';
export class User {
 
  public email!: string;
  public password!: string;
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new User();
 
  constructor() {}
  onSubmit(form: any) {
    console.log(form.value);
  }

}
