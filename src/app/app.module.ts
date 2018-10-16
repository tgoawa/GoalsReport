import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GoalDataComponent } from './goal-data/goal-data.component';
import { OneToOneDataComponent } from './one-to-one-data/one-to-one-data.component';
import { HoursDataComponent } from './hours-data/hours-data.component';
import { HoursSurveyDataComponent } from './hours-survey-data/hours-survey-data.component';
import { HomeComponent } from './home/home.component';
import { GroupedBarChartComponent } from './one-to-one-data/bar-chart/bar-chart.component';
import { LineChartComponent } from './one-to-one-data/line-chart/line-chart.component';
import { LocationStrategy, HashLocationStrategy } from '../../node_modules/@angular/common';
import { IndustrySpentTimeInComponent } from './hours-survey-data/industry-spent-time-in/industry-spent-time-in.component';
import { IndustryLearnAboutComponent } from './hours-survey-data/industry-learn-about/industry-learn-about.component';
import { ServiceLineAlignmentComponent } from './hours-survey-data/service-line-alignment/service-line-alignment.component';
import { AssuranceComponent } from './hours-survey-data/assurance/assurance.component';
import { AccountingComponent } from './hours-survey-data/accounting/accounting.component';
import { SpecialtyServiceComponent } from './hours-survey-data/specialty-service/specialty-service.component';
import { TaxComponent } from './hours-survey-data/tax/tax.component';
import { LearningAdvisoriesComponent } from './hours-survey-data/learning-advisories/learning-advisories.component';
import { OpportunityAdvisoriesComponent } from './hours-survey-data/opportunity-advisories/opportunity-advisories.component';
import { NoGoalsComponent } from './goal-data/no-goals/no-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalDataComponent,
    OneToOneDataComponent,
    HoursDataComponent,
    HoursSurveyDataComponent,
    HomeComponent,
    GroupedBarChartComponent,
    LineChartComponent,
    IndustrySpentTimeInComponent,
    IndustryLearnAboutComponent,
    ServiceLineAlignmentComponent,
    AssuranceComponent,
    AccountingComponent,
    SpecialtyServiceComponent,
    TaxComponent,
    LearningAdvisoriesComponent,
    OpportunityAdvisoriesComponent,
    NoGoalsComponent
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
    MatProgressSpinnerModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
