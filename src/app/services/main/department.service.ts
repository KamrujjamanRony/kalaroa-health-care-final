import { Injectable, inject } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import axios from 'axios';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  http = inject(HttpClient);

  constructor() {}

  addDepartment(model: any | FormData): Observable<void>{
    return this.http.post<void>(`${environment.DepartmentApi}`, model)
  }

  getAllDepartment(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.DepartmentApi}`);
  }

  getCompanyDepartment(): Observable<any[]> {
    return this.getAllDepartment().pipe(
      map(department => department.filter(data => data.companyID === environment.hospitalCode))
    );
  }

  getDepartment(id: any): Observable<any>{
    return this.http.get<any>(`${environment.DepartmentApi}/GetDepartmentById?id=${id}`);
  }

  updateDepartment(id: any, updateDepartmentRequest: any | FormData): Observable<any>{
    return this.http.put<any>(`${environment.DepartmentApi}/EditDepartment/${id}`, updateDepartmentRequest);
  }

  deleteDepartment(id: any): Observable<any>{
    return this.http.delete<any>(`${environment.DepartmentApi}/DeleteDepartment?id=${id}`);
  }
}