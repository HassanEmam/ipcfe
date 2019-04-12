import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-getorganisation',
  templateUrl: './getorganisation.component.html',
  styleUrls: ['./getorganisation.component.css']
})
export class GetorganisationComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  organisationData: any = {};
  constructor(public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    console.log(this.id);
    this.getOrganisation()
  }

  public  getOrganisation(){
    console.log("function triggered")
    this.restApi.getOrganisation(this.id).subscribe((data: {}) => {
      this.organisationData = data;
      console.log(data);
    });
}
}
