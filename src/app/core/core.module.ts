import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    NgxChartsModule,
  ],
  exports: [HeaderComponent, PieChartComponent, BarChartComponent],
  declarations: [HeaderComponent, PieChartComponent, BarChartComponent],
  providers: [DataService],
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
