import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private httpClientService : HttpclientService) { }

  ngOnInit() {
  }

  emp : Employee = new Employee("","","","");

  createEmployee():void {
    this.httpClientService.createEmployee(this.emp)
    .subscribe( data => {
      alert("Employee Created Successfully");
    });

  }

}
