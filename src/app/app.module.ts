import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { GetProductsComponent } from "./get-products/get-products.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { GetProductComponent } from "./get-product/get-product.component";
import { ProductService } from "./product.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    GetProductsComponent,
    EditProductComponent,
    GetProductComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
