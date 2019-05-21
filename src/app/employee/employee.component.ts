import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private httpClientService: HttpclientService) { }

  employees : Employee[];

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees():void{
    this.httpClientService.getEmployees().subscribe(
      response => this.employees = response,
    );
  }


  deleteEmployee(employee : Employee) : void {
    this.httpClientService.deleteEmployee(employee)
    .subscribe(data => {
      this.employees = this.employees.filter(u => u !== employee);
      alert("Employee Deleted Successfully");
    })
  }

}
