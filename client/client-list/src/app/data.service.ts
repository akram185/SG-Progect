import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://172.20.10.2:4444/client'
  //this is the url for my backend that is being run locally
  //this url varies from whatever machine your backend is running on

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(this.apiUrl);
  }

  addClient(data:any) {
    return this.http.post(this.apiUrl, data);
  }
}
