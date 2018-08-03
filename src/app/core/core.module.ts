import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { RouterModule } from '@angular/router';

import { MatButtonModule,
  MatDialogModule,
  MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent],
  providers:[DataService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
