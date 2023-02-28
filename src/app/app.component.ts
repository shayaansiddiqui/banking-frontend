import { animate, animation, style,state, transition, trigger, query, group } from '@angular/animations';
import { Component } from '@angular/core'
import { RouterOutlet } from "@angular/router";



const enterTransition = transition('* <=> *',[
query(':enter,:leave',style({ position:'fixed',width:'100%',zIndex:2}),{optional:true}),
group([
  query(':enter',[
    style({ transform:'translateX(100%)'}),
    animate('0.05s ease-out', style({transform:'translateX(0%)'}))
  ],{optional:true}),
  query(':leave',
  [
    style({transform : 'translateX(0%)'}),
    animate('0.5s ease-out', style({transform :'translateX(-100%)'}))
  ],{optional:true})
 ])
]);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'banking-frontend';


}

