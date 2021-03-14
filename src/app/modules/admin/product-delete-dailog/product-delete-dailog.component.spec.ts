import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteDailogComponent } from './product-delete-dailog.component';

describe('ProductDeleteDailogComponent', () => {
  let component: ProductDeleteDailogComponent;
  let fixture: ComponentFixture<ProductDeleteDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeleteDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleteDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
