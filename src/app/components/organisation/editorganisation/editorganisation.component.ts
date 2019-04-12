import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editorganisation',
  templateUrl: './editorganisation.component.html',
  styleUrls: ['./editorganisation.component.css']
})
export class EditorganisationComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  organisationData: any = {};

  constructor(public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { 
      
    }
  
  ngOnInit() {
    this.restApi.getOrganisation(this.id).subscribe((data: {}) => {
      this.organisationData = data});
    console.log(this.organisationData);
  }

  updateOrganisation() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateOrganisation(this.id, this.organisationData).subscribe(data => {
        this.router.navigate(['/organisationslist'])
      })
    }
  }
}