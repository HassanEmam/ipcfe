import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityeditComponent } from '../activityedit/activityedit.component';
import { GetactivityComponent } from '../getactivity/getactivity.component'
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-activitieslist',
  templateUrl: './activitieslist.component.html',
  styleUrls: ['./activitieslist.component.css']
})
export class ActivitieslistComponent implements OnInit {
  activities:  any = {};
  selectedActivity: any = {};
  editField: string;
  constructor(private  apiService:  ApiService,
    private router: Router,
    private modalService: NgbModal) { }
  ngOnInit() {
      this.getContacts();
      console.log('Init: ', this.activities);
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

  RowSelected(event: any, activity:any){
    
    this.selectedActivity= activity.code;   // declare variable in component.
    
    // this.selectedActivity.flag = !this.selectedActivity.flag;
    //console.log(this.selectedActivity);
    }

    updateList(id: number, property: string, $event: any) {
      var editField = $event.target.innerText;
      console.log(id, $event.target.innerText, this.activities.activities[id]);
      this.activities.activities[id][property] = editField;
      this.apiService.updateActivity(this.activities.activities[id].id, this.activities.activities[id])
      .subscribe(data => {
        this.router.navigate(['/activitieslist'])})
    }

    /* remove(id: any) {
      this.awaitingPersonList.push(this.activities[id]);
      this.activities.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    } */

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
  
}