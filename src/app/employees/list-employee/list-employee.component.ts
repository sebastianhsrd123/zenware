import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/data/employee.service';
import { IEmpleado } from 'src/app/interfaces/IEmpleado.interface';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  public empleados:IEmpleado[]=[];


  constructor(private employeesservice: EmployeeService)
  { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.employeesservice.employeeList()
      .subscribe(resp => {
        this.empleados = resp.data;

      });
    }


}
