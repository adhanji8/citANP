import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  _editableProductName: String = "";
  _editId: Number = null;
  productName: string = "";
  _singleProductNumber: number = null;
  _singleProductName: string = "";

  _productsArray: Array<any>;

  constructor(private productService: ProductService) {
    this.preloadProductDropdown();
  }

  async preloadProductDropdown() {
    let productResults = await this.productService.getAllProducts();
    this._productsArray = productResults.products;
  }

  async updateProduct() {
    await this.productService.updateProduct(
      this._editId,
      this._editableProductName
    );
  }

  ngOnInit() {}
}
