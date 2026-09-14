import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/interface/master';

@Injectable({
  providedIn: 'root',
})
export class Master {

  constructor(private http: HttpClient) {}

  

  getAllDept(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('/api/departments');
  }

}
