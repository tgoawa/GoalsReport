import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GoalDataComponent } from './goal-data/goal-data.component';
import { OneToOneDataComponent } from './one-to-one-data/one-to-one-data.component';
import { HoursDataComponent } from './hours-data/hours-data.component';
import { HoursSurveyDataComponent } from './hours-survey-data/hours-survey-data.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalDataComponent,
    OneToOneDataComponent,
    HoursDataComponent,
    HoursSurveyDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
