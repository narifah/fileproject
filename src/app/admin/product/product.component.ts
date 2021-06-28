import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  barang:any={};
  barangs:any=[]

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.title='PRODUCT';
  }


  productDetail(data: any,idx: number)
  {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.barangs.push(res);      
        //jika tidak maka perbarui data  
       else this.barangs[idx]=res; 
     }
   })
  }

}
