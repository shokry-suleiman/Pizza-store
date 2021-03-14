import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDeleteDailogComponent } from './product-delete-dailog/product-delete-dailog.component';
import { ProductAddDailogComponent } from './product-add-dailog/product-add-dailog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, ProductListComponent, ProductDeleteDailogComponent, ProductAddDailogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
