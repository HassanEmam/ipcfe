import { Component, OnInit, Input } from '@angular/core';
import { ApiService} from '../../../services/api.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-organisationcreate',
  templateUrl: './organisationcreate.component.html',
  styleUrls: ['./organisationcreate.component.css']
})
export class OrganisationcreateComponent implements OnInit {
  @Input() organisationDetails = { }
  constructor(private  apiService:  ApiService, public router: Router) { }

  ngOnInit() {
  }
  createOrganisation(){

    var  organisation  = {
        id:  3,
        code:  "CNST",
        name:  "Constology",
        description:  "Constology is a company implementing IT in Construction",
        is_active:  true
    };
    this.apiService.createOrganisation(organisation).subscribe((response) => {
        console.log(response);
    });
  };

  addOrganisation(){
    this.apiService.createOrganisation(this.organisationDetails).subscribe((data: {}) => {
      this.router.navigate(['/organisationslist'])
    })
  };
}
