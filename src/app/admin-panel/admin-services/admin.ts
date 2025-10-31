import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../Interface/orders';
import { tourismResponse } from '../../Interface/city';
import { signupdata, singindata } from '../../Interface/signup';
import { deleteuser } from '../../Interface/delet-user';
import { productResponsedata, tourismproduct } from '../../Interface/products';
import { UserResponse } from '../../Interface/add-admin';

@Injectable({
  providedIn: 'root',
})
export class Admin {
  private baseUrl = 'https://tourism-64dj3f2i3-yusafzai2007s-projects.vercel.app/api/v1/tourism';

  constructor(private http: HttpClient) {}

  orders() {
    return this.http.get<ApiResponse>(`${this.baseUrl}/get-allorders`);
  }

  order_details(id: string) {
    return this.http.get<ApiResponse>(`${this.baseUrl}/get-single-payment/${id}`);
  }

  deletepaymentdata(id: string) {
    return this.http.delete(`${this.baseUrl}/payment-delete/${id}`);
  }

  editpayment(id: string, updatedData: any) {
    return this.http.put(`${this.baseUrl}/update-booking/${id}`, updatedData);
  }

  allCities() {
    return this.http.get<tourismResponse>(`${this.baseUrl}/get-city`);
  }

  addcities(formdata: FormData) {
    return this.http.post(`${this.baseUrl}/city`, formdata);
  }

  editcities(id: string, data: FormData) {
    return this.http.put(`${this.baseUrl}/update-city/${id}`, data);
  }

  getallusers() {
    return this.http.get<deleteuser>(`${this.baseUrl}/user`);
  }

  deleteuser(id: string) {
    return this.http.delete(`${this.baseUrl}/deletUser/${id}`);
  }

  add_products() {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-products`);
  }

  Add_products(formdata: FormData) {
    return this.http.post(`${this.baseUrl}/product`, formdata);
  }

  delete_product(id: string) {
    return this.http.delete(`${this.baseUrl}/delete-products/${id}`);
  }

  update_product(id: string, updatedata: tourismproduct) {
    return this.http.put(`${this.baseUrl}/update-product/${id}`, updatedata);
  }

  Admin(admin: signupdata) {
    return this.http.post(`${this.baseUrl}/add_Admin`, admin);
  }

  current_user() {
    return this.http.get<singindata>(`${this.baseUrl}/currentuser`);
  }

  search_product(query: string = "") {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-products?search=${query}`);
  }
}
