import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  _id: Number;
  _productName: String;

  constructor(private productService: ProductService) {}

  async createProduct() {
    await this.productService.createProduct(this._id, this._productName);
  }

  ngOnInit() {}
}
