import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { OrganisationslistComponent } from './components/organisation/organisationslist/organisationslist.component';
import { ActivitieslistComponent } from './components/schedule/activitieslist/activitieslist.component';
import { OrganisationcreateComponent } from './components/organisation/organisationcreate/organisationcreate.component';
import { EditorganisationComponent } from './components/organisation/editorganisation/editorganisation.component';
import { GetorganisationComponent } from './components/organisation/getorganisation/getorganisation.component';
import { GetactivityComponent } from './components/schedule/getactivity/getactivity.component';
import { ActivityeditComponent } from './components/schedule/activityedit/activityedit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationslistComponent,
    ActivitieslistComponent,
    OrganisationcreateComponent,
    EditorganisationComponent,
    GetorganisationComponent,
    GetactivityComponent,
    ActivityeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
