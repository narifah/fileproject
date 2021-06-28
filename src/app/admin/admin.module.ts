import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/home'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
