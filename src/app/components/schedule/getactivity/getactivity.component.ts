import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-getactivity',
  templateUrl: './getactivity.component.html',
  styleUrls: ['./getactivity.component.css']
})
export class GetactivityComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  activityData: any = {};
  constructor(public restApi: ApiService,
    public router: Router,
    public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getActivity();
  }
  public  getActivity(){
    console.log("function triggered")
    this.restApi.getActivity(this.id).subscribe((data: {}) => {
      this.activityData = data;
      console.log(data);
    });
  }
}
