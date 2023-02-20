import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
  declarations: [
    ListEmployeeComponent,
    DetailEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListEmployeeComponent,
    DetailEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ]
})
export class EmployeesModule { }
