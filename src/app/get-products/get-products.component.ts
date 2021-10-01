import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-get-products",
  templateUrl: "./get-products.component.html",
  styleUrls: ["./get-products.component.css"],
})
export class GetProductsComponent implements OnInit {
  _productsArray: Array<any>;

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit() {}

  async getProducts() {
    let result: { products: [] } = await this.productService.getAllProducts();
    this._productsArray = result.products;
  }

  async deleteProduct(id) {
    this.productService.deleteProduct(id);
  }
}
