import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './public/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./employees/employees.module').then( (m)=> m.EmployeesModule)

      }
    ]
  },

  {
    path: '**',
    redirectTo:'',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
