import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:5000';
  constructor(private  httpClient:  HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getOrganisations(){
    return  this.httpClient.get(`${this.API_URL}/organisations`);
  }

  getOrganisation(id){
    return  this.httpClient.get(`${this.API_URL}/organisation/`+ id);
  }

  getActivity(id){
    return  this.httpClient.get(`${this.API_URL}/activity/`+ id);
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

  updateOrganisation(id, organisation){
    return this.httpClient.put(this.API_URL + '/organisation/' + id, organisation, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateActivity(id, activity){
    return this.httpClient.put(this.API_URL + '/activity/' + id, activity, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
