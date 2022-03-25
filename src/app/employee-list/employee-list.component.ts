import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../services/emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empServiceService: EmpServiceService,
    private router: Router) { }
    
  emplist: any[];

  ngOnInit() {
    this.empServiceService.getEmployees().subscribe(data => {
      this.emplist = data;
    })
  }

  delete(emp) {
    this.empServiceService.DeleteEmployee(emp).subscribe(data => {
      this.emplist = this.emplist.filter(x => x.id != emp.id)
    })
  }

  editEmp(emp) {
    this.router.navigate(['add-emp'], { queryParams :{ ID: emp.id } });
  }

}
