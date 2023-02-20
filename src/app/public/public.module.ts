import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    SkeletonComponent
  ]
})
export class PublicModule { }
