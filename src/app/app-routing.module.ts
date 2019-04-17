import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationslistComponent } from './components/organisation/organisationslist/organisationslist.component';
import { ActivitieslistComponent} from './components/schedule/activitieslist/activitieslist.component'
import { OrganisationcreateComponent } from './components/organisation/organisationcreate/organisationcreate.component';
import { EditorganisationComponent } from './components/organisation/editorganisation/editorganisation.component';
import { GetorganisationComponent } from './components/organisation/getorganisation/getorganisation.component';
import { GetactivityComponent } from './components/schedule/getactivity/getactivity.component';
import { ActivityeditComponent } from './components/schedule/activityedit/activityedit.component';
import { CreateactivityComponent } from './components/schedule/createactivity/createactivity.component';
import { GanttComponent } from './components/gantt/gantt.component';


const routes: Routes = [{ path:  '', redirectTo:  'organisationslist', pathMatch:  'full' },
{
    path:  'organisationslist',
    component:  OrganisationslistComponent
},
{
  path:  'activitieslist',
  component:  ActivitieslistComponent,
  children:[
    {path: ':id', component: GetactivityComponent }
  ]
},
{
  path:  'organisation/:id',
  component:  GetorganisationComponent
},
{
  path:  'editactivity/:id',
  component:  ActivityeditComponent
},
{
  path:  'createorganisation',
  component:  OrganisationcreateComponent
},
{
  path:  'gantt',
  component:  GanttComponent
},
{
  path:  'createactivity',
  component:  CreateactivityComponent
},
{
  path:  'createactivity',
  component:  OrganisationcreateComponent
},
{
  path:  'updateactivity/:id',
  component:  ActivityeditComponent
},
{
  path:  'updateorganisation/:id',
  component:  EditorganisationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
