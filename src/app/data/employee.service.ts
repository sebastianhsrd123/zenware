import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IEmpleado, IEmpleadoSend } from '../interfaces/IEmpleado.interface';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private uri = environment.uri;
  private __empleados:IEmpleado []=[];
  private error:any;
  private __empleado!:IEmpleado;
  private __empleadoSend!:IEmpleadoSend;

  constructor(private http: HttpClient,
    private router: Router) { }

  employeeList(){
    const response =
    {
      status:"failed",
      data:this.__empleados
    }
    return this.http.get<{status:string; data: IEmpleado[]}>(`${this.uri}/api/v1/employees`)
      .pipe(
        map( r =>{
          response.data = r.data;
          response.status = r.status;
          return response;
      }),
      catchError(err => of(response)));
    }

    getUser(id:number){
      const response =
    {
      status:"failed",
      data:this.__empleado,
      message:"Error al traer el usuario" + id
    }

      return this.http.get<{status:string; data: IEmpleado; message:string}>(`${this.uri}/api/v1/employee/${id}`)
        .pipe(
          map( r =>{
            response.data = r.data;
          response.status = r.status;
          response.message = r.message;
          return response;
        }),
        catchError(err => of(response)));
    }

    updatetEmployee(id:number, data:any){
      const response =
    {
      status:"failed",
      data:this.__empleado,

    }

      return this.http.put<{status:string; message:string}>(`${this.uri}/api/v1/update/${id}`, data)
        .pipe(
          map( r =>{
          response.status = "success";
          response.data = data;
          return response;
        }),
        catchError(err => of(response)));
    }

    createEmployee(data: IEmpleadoSend){
      const response =
    {
      status:"failed",
      message:"ha sucedido un error al crear el usuario",
      data:this.__empleadoSend
    };
      return this.http.post<{status:string; message:string; data: IEmpleadoSend}>
      (`${this.uri}/api/v1/create`, data)
        .pipe(
          map( r =>{
          response.status = r.status;
          response.data = r.data;
          response.message = "Usuario creado correctamente"
          return response;
        }),
        catchError(err => of(response)));
    }

    deleteEmployee(id:number){
      const response =
    {
      status:"failed",
      message:'',
    }

      return this.http.delete<{status:string; message:string}>(`${this.uri}/api/v1/delete/${id}`)
        .pipe(
          map( r =>{
          response.status = "success";
          response.message = r.message;
          return response;
        }),
        catchError(err => of(response)));
    }
}
