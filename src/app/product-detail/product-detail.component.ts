import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from "../products";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    console.log(this.route.snapshot.params['productId']);
    
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id == productIdFromRoute);
  }
}
