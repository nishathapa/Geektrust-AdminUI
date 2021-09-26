import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './employee-table/employee-table.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  getData(): Observable<employee[]>{
    return this.http.get<employee[]>(this.URL);
  }
}
