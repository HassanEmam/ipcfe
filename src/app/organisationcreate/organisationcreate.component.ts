import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-organisationcreate',
  templateUrl: './organisationcreate.component.html',
  styleUrls: ['./organisationcreate.component.css']
})
export class OrganisationcreateComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

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
}
