import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoalDataComponent } from './goal-data/goal-data.component';
import { OneToOneDataComponent } from './one-to-one-data/one-to-one-data.component';
import { HoursDataComponent } from './hours-data/hours-data.component';
import { HoursSurveyDataComponent } from './hours-survey-data/hours-survey-data.component';
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

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'completed-goals', component: GoalDataComponent},
  {path: 'no-goals-completed', component: NoGoalsComponent},
  {path: 'one-to-one-report', component: OneToOneDataComponent},
  {path: 'hours-report', component: HoursDataComponent},
  {path: 'hours-survey-report', component: HoursSurveyDataComponent},
  {path: 'industry-spent-time-in', component: IndustrySpentTimeInComponent},
  {path: 'industry-learn-about', component: IndustryLearnAboutComponent},
  {path: 'service-line-alignment', component: ServiceLineAlignmentComponent},
  {path: 'assurance', component: AssuranceComponent},
  {path: 'accounting', component: AccountingComponent},
  {path: 'specialty-services', component: SpecialtyServiceComponent},
  {path: 'tax', component: TaxComponent},
  {path: 'learning-advisories', component: LearningAdvisoriesComponent},
  {path: 'opportunity-advisories', component: OpportunityAdvisoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
