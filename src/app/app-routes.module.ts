import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';


const myRouteConfig: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'about/:id', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myRouteConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
