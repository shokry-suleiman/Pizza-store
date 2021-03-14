import { DebugElement } from '@angular/core';
import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductAddDailogComponent } from './product-add-dailog.component';

describe('ProductAddDailogComponent', () => {
  let component: ProductAddDailogComponent;
  let fixture: ComponentFixture<ProductAddDailogComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should set submitted to true`, async(() => {
    component.addProduct();
    expect(component.isSubmitting).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'addProduct');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addProduct).toHaveBeenCalled();
  }));

 it(`form should be invalid`, async(() => {
    component.productForm.controls['name'].setValue('');
    component.productForm.controls['qty'].setValue('');
    component.productForm.controls['price'].setValue('');
    component.productForm.controls['image'].setValue('');
    component.productForm.controls['code'].setValue('');
    expect(component.productForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.productForm.controls['price'].setValue(34);
    component.productForm.controls['name'].setValue('Pizza');
    component.productForm.controls['qty'].setValue(4);
    component.productForm.controls['code'].setValue('35436');
    expect(component.productForm.valid).toBeTruthy();
  }));


});
