import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:5000';
  constructor(private  httpClient:  HttpClient) { }
  getOrganisations(){
    return  this.httpClient.get(`${this.API_URL}/organisations`);
}
  getActivities(){
    return this.httpClient.get(`${this.API_URL}/activities`);
  }
  createOrganisation(organisation){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return  this.httpClient.post(`${this.API_URL}/organisation`,organisation);
}
}
