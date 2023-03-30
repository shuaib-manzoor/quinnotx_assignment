import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren:()=>import("./login/login.module").then((m)=>m.LoginModule)
  },
  {
    path:"engineers",
    loadChildren:()=>import("./featureModules/engineers/engineers.module").then((m)=>m.EngineersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
