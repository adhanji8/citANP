import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-get-product",
  templateUrl: "./get-product.component.html",
  styleUrls: ["./get-product.component.css"],
})
export class GetProductComponent implements OnInit {
  _productsArray: Array<any>;
  _singleProductName: string;
  _singleProductNumber: number;

  constructor(private productService: ProductService) {
    this.preloadSingleItems();
  }

  ngOnInit() {}

  async preloadSingleItems() {
    let productResults = await this.productService.getAllProducts();
    this._productsArray = productResults.products;
  }

  async getProduct(id) {
    let result: any = await this.productService.getProduct(id);
    let productResults: { products: [] } =
      await this.productService.getAllProducts();
    this._productsArray = productResults.products;
    this._singleProductName = result.product.productName;
    this._singleProductNumber = result.product._id;
  }
}
