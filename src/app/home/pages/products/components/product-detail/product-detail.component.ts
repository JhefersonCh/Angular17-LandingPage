import { Component, ElementRef, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../iproduct';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product?: IProduct;
  loading = true;

  constructor(
    private elementRef: ElementRef,
    private dialogMat: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct
  ){}
  
  ngOnInit(): void {
    this.product = this.data;
    setTimeout(() => {
      this.loading = !this.loading;
    }, 150);
    this.elementRef.nativeElement.querySelector('.modal-overlay').addEventListener('click', this.onOverlayClick.bind(this));
  }

  onOverlayClick(event: MouseEvent): void {
    // Verifica si el objetivo del clic está dentro del contenedor modal-container
    if (!this.elementRef.nativeElement.querySelector('.modal-container').contains(event.target as Node)) {
      // Cerrar el modal aquí
      this.cerrarModal();
    }
  }

  cerrarModal(){
    this.dialogMat.close();    
  }
}
