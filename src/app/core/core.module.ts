import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { FormatHelper } from './helper/formatHelper';
import { TeamMemberListComponent } from './team-member-list/team-member-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    NgxChartsModule,
  ],
  exports: [HeaderComponent, PieChartComponent, BarChartComponent],
  declarations: [HeaderComponent, PieChartComponent, BarChartComponent, TeamMemberListComponent],
  providers: [DataService, FormatHelper],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
