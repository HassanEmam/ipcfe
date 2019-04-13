import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityeditComponent } from '../activityedit/activityedit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activitieslist',
  templateUrl: './activitieslist.component.html',
  styleUrls: ['./activitieslist.component.css']
})
export class ActivitieslistComponent implements OnInit {
  activities:  Array<object> = [];
  constructor(private  apiService:  ApiService,
    private router: Router,
    private modalService: NgbModal) { }
  ngOnInit() {
      this.getContacts();
  }
  public  getContacts(){
      this.apiService.getActivities().subscribe((data:  Array<object>) => {
          this.activities  =  data;
          console.log(data);
      });
  }

  openFormModal(activity) {
    const modalRef = this.modalService.open(ActivityeditComponent);
    modalRef.componentInstance.id = activity.id;
    modalRef.result.then((result) => {
      this.router.navigate(['/activitieslist'])
      console.log('Results: ' + result);
    }).catch((error) => {
      console.log(error);
    });
  }
  
}