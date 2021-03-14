import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete-dailog',
  templateUrl: './product-delete-dailog.component.html',
  styleUrls: ['./product-delete-dailog.component.scss']
})
export class ProductDeleteDailogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ProductDeleteDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { index: string}
     ) { }

  ngOnInit(): void {
  }

  closeDialog() {
		this.dialogRef.close();
	}
  deleteItem(){
    this.dialogRef.close(this.data.index);
  }
}


