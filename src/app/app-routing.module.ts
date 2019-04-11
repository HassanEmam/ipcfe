import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationslistComponent } from './organisationslist/organisationslist.component';
import { ActivitieslistComponent} from './activitieslist/activitieslist.component'
import { OrganisationcreateComponent } from './organisationcreate/organisationcreate.component';

const routes: Routes = [{ path:  '', redirectTo:  'organisationslist', pathMatch:  'full' },
{
    path:  'organisationslist',
    component:  OrganisationslistComponent
},
{
  path:  'activitieslist',
  component:  ActivitieslistComponent
},
{
  path:  'createorganisation',
  component:  OrganisationcreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
