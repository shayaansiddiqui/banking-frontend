import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
 
  constructor(private dialog: MatDialog) {}
  onSubmit(form: any) {
    console.log(form.value);
  }
  openDialog(){
    this.dialog.open(LoginComponent);
  }

}
