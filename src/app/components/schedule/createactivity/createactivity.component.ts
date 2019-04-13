import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-createactivity',
  templateUrl: './createactivity.component.html',
  styleUrls: ['./createactivity.component.css']
})
export class CreateactivityComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  activityData: any ={};
  schedules: any={};
  schedule_id: any= {};

  constructor(public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() { 
    this.restApi.getSchedules().subscribe((data:  Array<object>) => {
      this.schedules  =  data;
      console.log(this.schedules);
    });
  }

  updateActivity() {
    
    console.log(this.activityData);
      this.restApi.createActivity(this.activityData).subscribe(data => {
        this.router.navigate(['/activitieslist'])
      })
  }

}
