import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



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
    public router: Router,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.restApi.getActivity(this.id).subscribe((data: {}) => {
      this.activityData = data});
      
    }

  closeModal() {
      this.activeModal.close('Modal Closed');
      this.router.navigate(['/activitieslist'])
      //location.reload();
    }

  updateActivity() {
    console.log(this.activityData);
      this.restApi.updateActivity(this.id, this.activityData).subscribe(data => {
        this.router.navigate(['/activitieslist'])
        this.closeModal();
        
        
      })
  }

}
