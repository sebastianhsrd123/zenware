import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from 'src/app/data/employee.service';
import { IEmpleadoSend } from 'src/app/interfaces/IEmpleado.interface';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public empleado!: IEmpleadoSend;
  public status: string='';
  public createForm: FormGroup;
  public message = "";
  public show = false;

  constructor(private employeeservice: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,) {

      this.createForm=this.formBuilder.group({

        name:['',
        [ Validators.required,
          Validators.maxLength(30),
          Validators.minLength(3),
          Validators.pattern(
            /[a-zA-Z]*\s?[a-zA-Z]+$/
            )
        ]
      ],
        salary:['',
        [Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
        Validators.pattern(/^[0-9]*$/)]
      ],

        age:['',
        [Validators.required,
        Validators.maxLength(2),
        Validators.minLength(1),
        Validators.pattern(/^[0-9]*$/)]
      ]
      })
     }

  ngOnInit(): void {
  }

 createEmployee(){
    this.employeeservice.createEmployee(this.createForm.value)
    .subscribe(data =>{
      this.status=data.status;
      this.empleado = data.data
      this.message = data.message
      if(data.status == 'success'){
        this.createForm.reset();
        this.show=true
      }
    })


  }

}
