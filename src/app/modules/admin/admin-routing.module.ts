import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path:'',component:AdminComponent, children:[
    { path:'',pathMatch:'full',redirectTo:'product-list'},
    { path:'product-list', component:ProductListComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
