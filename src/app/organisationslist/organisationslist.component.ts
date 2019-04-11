import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';


@Component({
  selector: 'app-organisationslist',
  templateUrl: './organisationslist.component.html',
  styleUrls: ['./organisationslist.component.css']
})
export class OrganisationslistComponent implements OnInit {

private  organisations:  Array<object> = [];
constructor(private  apiService:  ApiService) { }
ngOnInit() {
    this.getContacts();
}
public  getContacts(){
    this.apiService.getOrganisations().subscribe((data:  Array<object>) => {
        this.organisations  =  data;
        console.log(data);
    });
}
}