import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineersListComponent } from './engineers-list/engineers-list.component';
import { ViewEngineerComponent } from './view-engineer/view-engineer.component';

const routes: Routes = [
  {
  path:"",
  pathMatch:"full",
  component:EngineersListComponent
},
{
  path:"view/:id",
  component:ViewEngineerComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineersRoutingModule { }
