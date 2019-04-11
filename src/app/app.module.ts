import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { OrganisationslistComponent } from './organisationslist/organisationslist.component';
import { ActivitieslistComponent } from './activitieslist/activitieslist.component';
import { OrganisationcreateComponent } from './organisationcreate/organisationcreate.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationslistComponent,
    ActivitieslistComponent,
    OrganisationcreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
