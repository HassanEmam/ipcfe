import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../../services/api.service';

@Component({
  selector: 'app-activitieslist',
  templateUrl: './activitieslist.component.html',
  styleUrls: ['./activitieslist.component.css']
})
export class ActivitieslistComponent implements OnInit {
  activities:  Array<object> = [];
  constructor(private  apiService:  ApiService) { }
  ngOnInit() {
      this.getContacts();
  }
  public  getContacts(){
      this.apiService.getActivities().subscribe((data:  Array<object>) => {
          this.activities  =  data;
          console.log(data);
      });
  }
}