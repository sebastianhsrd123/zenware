import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from 'src/app/data/employee.service';
import { IEmpleado } from 'src/app/interfaces/IEmpleado.interface';


@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  private __id:number=0;
  public empleado!: IEmpleado;

  public status: string='';
  public show:boolean=false;
  public updateForm: FormGroup;
  public delete="";


  constructor(private employeeservice: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
      this.updateForm=this.formBuilder.group({

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
    this.queryEmployee();
    this.employeeByParams();
  }

  queryEmployee():number{
    this.activatedRoute.params.subscribe(params => {
      this.__id =params['id'];

   });
   return this.__id

  }

  employeeByParams(){
    this.employeeservice.getUser(this.__id)
      .subscribe(resp => {
        this.empleado = resp.data;

      });
    }

  showUpdate(){
    this.show = true;
  }

  updateEmployee(){
    this.employeeservice.updatetEmployee(this.__id, this.updateForm.value)
    .subscribe(data =>{
      this.status=data.status;
      if(this.status=="success"){
        this.updateForm.reset();
      }

    })
  }

  deleteEmployee(){
    this.employeeservice.deleteEmployee(this.__id)
    .subscribe(data =>{
      if(data.status == "success"){
        this.delete = "true"
      }
      else{
        this.delete = "false"
      }
    })
  }

}
