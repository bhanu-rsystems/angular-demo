import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PolicyListComponent } from './insurance/policy-list/policy-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PolicyListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PolicyListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
