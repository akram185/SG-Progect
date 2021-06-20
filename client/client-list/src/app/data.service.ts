import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://192.168.1.238:4444/client'

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(this.apiUrl);
  }

  addClient(data:any) {
    return this.http.post(this.apiUrl, data);
  }
}
