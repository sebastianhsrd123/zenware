import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {
    path:'',
    component: ListEmployeeComponent,

  },

  {
    path: 'detail/:id',
    component: DetailEmployeeComponent

  },
  {
    path: 'create',
    component: CreateEmployeeComponent

  },
  {
    path: 'update',
    component: UpdateEmployeeComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
