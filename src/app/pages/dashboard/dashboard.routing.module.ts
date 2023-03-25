import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SummaryComponent} from "./summary/summary.component";
import {TransactionComponent} from "./transaction/transaction.component";

const routes: Routes = [
  {
    path: "",
    component: SummaryComponent,
    children: [
      {
        path: "summary",
        component: SummaryComponent
      }, {
        path: "transaction",
        component: TransactionComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
