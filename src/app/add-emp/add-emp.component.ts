import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../services/emp-service.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

   id;
  name;
  hi;
  constructor(private empServiceService: EmpServiceService,
    private route: ActivatedRoute,
       private router: Router) { }
       

  ngOnInit() {

    
    
    this.route.queryParamMap.subscribe(queryparams => {
      this.id =queryparams.get('ID')

      this.empServiceService.getEmployees().subscribe(data=>{
        this.name=data.filter(emp=>emp.id==this.id)[0].name;
      })
    });   
     

  }

  editEmployee() {
    let emp = {
      id: this.id,
      name: this.name
    }

    this.empServiceService.editEmployee(emp).subscribe(data => {
      this.router.navigate(['emp-list']);
    })
  }

  addEmployee() {
    let emp = {
      id: this.id,
      name: this.name
    }

    this.empServiceService.addEmployee(emp).subscribe(data => {
      this.router.navigate(['emp-list']);
    })
  }
}
