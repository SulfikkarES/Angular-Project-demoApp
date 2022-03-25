import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent, pathMatch: 'full' },
  { path: 'emp-list', component: EmployeeListComponent },
  { path: 'add-emp', component: AddEmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
