import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyChartComponent } from './xy-chart/xy-chart.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:XyChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
