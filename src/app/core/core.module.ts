import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { RouterModule } from '@angular/router';

import { MatButtonModule,
  MatDialogModule,
  MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
