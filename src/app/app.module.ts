import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GoalDataComponent } from './goal-data/goal-data.component';
import { OneToOneDataComponent } from './one-to-one-data/one-to-one-data.component';
import { HoursDataComponent } from './hours-data/hours-data.component';
import { HoursSurveyDataComponent } from './hours-survey-data/hours-survey-data.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './one-to-one-data/bar-chart/bar-chart.component';
import { LineChartComponent } from './one-to-one-data/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalDataComponent,
    OneToOneDataComponent,
    HoursDataComponent,
    HoursSurveyDataComponent,
    HomeComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
