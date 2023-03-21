import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private RouterModule: RouterModule) {
  }
}
