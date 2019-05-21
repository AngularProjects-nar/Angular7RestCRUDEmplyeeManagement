import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../shared/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient : HttpClient) { }

  getEmployees() {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8080/getAllEmployees');
  }

  createEmployee(employee){
    return this.httpClient.post<Employee>("http://localhost:8080/createEmployee", employee)
  }

  public deleteEmployee(employee : Employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/deleteEmployee" + "/"+ employee.empId);
  }
}
