import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-product-add-dailog',
  templateUrl: './product-add-dailog.component.html',
  styleUrls: ['./product-add-dailog.component.scss']
})
export class ProductAddDailogComponent implements OnInit {
  productForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:['',[Validators.required,Validators.min(0)]],
    qty:['',[Validators.required,Validators.min(0)]],
    code:['',[Validators.required,Validators.minLength(0)]],
    image:['',Validators.required]
  }) 
  isSubmitting:boolean = false;
  uploadedImage:any;
  constructor( private dialogRef: MatDialogRef<ProductAddDailogComponent>,
                private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  closeDialog() {
		this.dialogRef.close();
	}

  deleteItem(){
    this.dialogRef.close();
  }
  addProduct(){
    let product = {
      name:this.productForm.value.name,
      code:this.productForm.value.code,
      price:this.productForm.value.price,
      qty:this.productForm.value.qty,
      image:this.uploadedImage
    }
    of(null).pipe(timeout(1500)).subscribe((res => {
      this.dialogRef.close(JSON.stringify(product));
    }))
    
  }
  get name(){
    return this.productForm.get('name');
  }
  get price(){
    return this.productForm.get('price');
  }
  get qty(){
    return this.productForm.get('qty');
  }
  get code(){
    return this.productForm.get('code');
  }
  previewImage(files:any) {
		if (files.length === 0) {
			return;
		}

		const mimeType = files[0].type;
		if (mimeType.match(/image\/*/) == null) {
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = (_event) => {
			// this.productForm.patchValue({ 'image': files[0] })
			this.uploadedImage = reader.result;
		};
	}


	onFileChangeImage(event:any) {
		if (event.target.files && event.target.files.length) {
			this.previewImage(event.target.files);
			const [file] = event.target.files;

		}
	}

}
