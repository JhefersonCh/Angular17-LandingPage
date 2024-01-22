import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { IProduct } from '../../iproduct';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, ProductDetailComponent, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  private _apiProducts = inject(ApiService);
  productsList?: IProduct[];
  option = true;
  search = '';
  productsF?: IProduct[];
  asc = true;
  ascNumber = false;
  router = inject(Router);
  dialog = inject(MatDialog);
  loading = true;
  
  ngOnInit(): void {
      this._apiProducts.getProducts().subscribe((data: IProduct[]) =>{
        this.productsList = data;
        this.productsF = this.productsList
        this.loading = !this.loading;
      })
  }
  searchElement(){
    if(this.search === ''){
      this.productsF = this.productsList
    }else if(this.search){
      this.productsF = this.productsList?.filter(element => 
        element.title.toLowerCase().includes(this.search.toLowerCase()) 
        || element.id.toString().startsWith(this.search)
      )
    }
  }
  orderByTitle(header: string){
    if(header){
      this.productsF = this.productsF?.sort((a: IProduct,b: IProduct) => {
        const nameA = a[header]?.toString().toLowerCase();
        const nameB = b[header]?.toString().toLowerCase();
        if (this.asc) {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      })
      this.asc = !this.asc;
    }
  }
  orderById(header: string){
    if(header){
      this.productsF = this.productsF?.sort((a,b) =>{
        return this.ascNumber ? Number(a[header]) - Number(b[header]) : Number(b[header]) - Number(a[header]);
      } )
    }
    this.ascNumber = !this.ascNumber;
  }
  abrirDetallesModal(id: number): void {
    if(id){
      const productForDetails = this.productsF?.find(prod => prod.id === id)
      const dialogRef = this.dialog.open(ProductDetailComponent, {
        width: '400px',
        data: productForDetails
      });

      dialogRef.afterClosed().subscribe(result => {
        
      });
    }
  }
}