import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  baseUrl = 'http://localhost:3000/emplist/';
  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get<any>(this.baseUrl);
  }

  DeleteEmployee(emp) {
    return this.httpClient.delete<any>(this.baseUrl + emp.id);
  }

  editEmployee(emp) {
    return this.httpClient.put<any>(this.baseUrl + emp.id, emp);
  }

  addEmployee(emp) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.post<any>(this.baseUrl, emp, {headers});
  }
}
