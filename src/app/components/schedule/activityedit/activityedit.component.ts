import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-activityedit',
  templateUrl: './activityedit.component.html',
  styleUrls: ['./activityedit.component.css']
})
export class ActivityeditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  activityData: any ={};

  constructor(public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.restApi.getActivity(this.id).subscribe((data: {}) => {
      this.activityData = data});
      
    }

  updateActivity() {
    console.log(this.activityData);
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateActivity(this.id, this.activityData).subscribe(data => {
        this.router.navigate(['/activitieslist'])
      })
    }
  }

}
