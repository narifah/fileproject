import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  barang:any={};

  constructor() { }

  ngOnInit(): void {
    this.title='Product';
  }

}
