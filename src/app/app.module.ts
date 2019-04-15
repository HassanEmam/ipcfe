import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgGanttEditorModule } from 'ng-gantt';

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
import { CreateactivityComponent } from './components/schedule/createactivity/createactivity.component';
import { GanttComponent } from './components/gantt/gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationslistComponent,
    ActivitieslistComponent,
    OrganisationcreateComponent,
    EditorganisationComponent,
    GetorganisationComponent,
    GetactivityComponent,
    ActivityeditComponent,
    CreateactivityComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgGanttEditorModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ActivityeditComponent
  ]
})
export class AppModule { }
