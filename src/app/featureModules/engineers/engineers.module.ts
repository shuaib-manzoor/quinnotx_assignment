import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineersRoutingModule } from './engineers-routing.module';
import { EngineersListComponent } from './engineers-list/engineers-list.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DataTablesModule } from 'angular-datatables';
import { ViewEngineerComponent } from './view-engineer/view-engineer.component';


@NgModule({
  declarations: [
    EngineersListComponent,
    ViewEngineerComponent
  ],
  imports: [
    CommonModule,
    EngineersRoutingModule,
    DataTablesModule
  ],
  providers:[DataServiceService]
})
export class EngineersModule { }
