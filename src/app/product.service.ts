import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const BASE_URL = "http://localhost:1337/Product/";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  _http: HttpClient;
  _errorMessage: String = "";

  constructor(private http: HttpClient) {
    this._http = http;
  }

  getAllProducts() {
    let url = BASE_URL + "Index";
    return this._http.get<any>(url).toPromise();
  }

  getProduct(id) {
    let url = BASE_URL + "Detail?_id=" + id;
    return this._http.get<any>(url).toPromise();
  }

  async createProduct(id, productName) {
    await this.http
      .post(BASE_URL + "CreateProduct", {
        _id: id,
        productName,
      })
      .toPromise();
    await this.getAllProducts();
    location.reload();
  }

  async deleteProduct(_id) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: { _id: _id },
    };

    let url = BASE_URL + "Delete";
    await this.http.delete(url, httpOptions).toPromise();
    this.getAllProducts();
    location.reload();
  }

  async updateProduct(editId, editableProductName) {
    await this.http
      .put(BASE_URL + "Update", {
        _id: editId,
        productName: editableProductName,
      })
      .toPromise();
    this.getAllProducts();
    location.reload();
  }
}
