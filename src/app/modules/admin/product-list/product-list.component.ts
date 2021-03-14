import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddDailogComponent } from '../product-add-dailog/product-add-dailog.component';
import { ProductDeleteDailogComponent } from '../product-delete-dailog/product-delete-dailog.component';
import { ToastrService } from 'ngx-toastr';
import { PRODUCT } from 'src/app/@resources/models/product';
import { ProductService } from 'src/app/@resources/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products!: PRODUCT[];
  constructor(private dialog: MatDialog,
              private toastrService:ToastrService,
              private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.listAllProducts().subscribe((res:any) =>{
      this.products = res["data"];
      } )
  }

  addProduct(){
    const dialogRef = this.dialog.open(ProductAddDailogComponent, {
			width: '600px',
			disableClose: true
		});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.products.push(JSON.parse(result))
              this.toastrService.success(`Product Added Successfully `,`Success`)

      }
    
		});
  }
  

  deleteItem(index:any){
    const dialogRef = this.dialog.open(ProductDeleteDailogComponent, {
			width: '500px',
			panelClass: 'delete-dialog',
			disableClose: true,
      data:{index:index}
		});
    dialogRef.afterClosed().subscribe(result => {
			console.log('result',result)
      if(result != undefined || result !=null) {
        this.products.splice(index,1);
      }
		});
  }
}
