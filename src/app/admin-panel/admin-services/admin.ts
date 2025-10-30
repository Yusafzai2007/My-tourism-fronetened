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
  constructor(private http: HttpClient) {}

  orders() {
    return this.http.get<ApiResponse>('http://localhost:4000/api/v1/tourism/get-allorders');
  }

  order_details(id: string) {
    return this.http.get<ApiResponse>(
      `http://localhost:4000/api/v1/tourism/get-single-payment/${id}`
    );
  }

  deletepaymentdata(id: string) {
    return this.http.delete(`http://localhost:4000/api/v1/tourism/payment-delete/${id}`);
  }

  editpayment(id: string, updatedData: any) {
    return this.http.put(`http://localhost:4000/api/v1/tourism/update-booking/${id}`, updatedData);
  }

  allCities() {
    return this.http.get<tourismResponse>('http://localhost:4000/api/v1/tourism/get-city');
  }

  addcities(formdata: FormData) {
    return this.http.post('http://localhost:4000/api/v1/tourism/city', formdata);
  }

  editcities(id: string, data: FormData) {
    return this.http.put(`http://localhost:4000/api/v1/tourism/update-city/${id}`, data);
  }

  getallusers() {
    return this.http.get<deleteuser>('http://localhost:4000/api/v1/tourism/user');
  }

  deleteuser(id: string) {
    return this.http.delete(`http://localhost:4000/api/v1/tourism/deletUser/${id}`);
  }

  add_products() {
    return this.http.get<tourismproduct>('http://localhost:4000/api/v1/tourism/get-products');
  }

  Add_products(formdata: FormData) {
    return this.http.post('http://localhost:4000/api/v1/tourism/product', formdata);
  }

  delete_product(id: string) {
    return this.http.delete(`http://localhost:4000/api/v1/tourism/delete-products/${id}`);
  }

  update_product(id: string, updatedata: tourismproduct) {
    return this.http.put(`http://localhost:4000/api/v1/tourism/update-product/${id}`, updatedata);
  }

  Admin(admin: signupdata) {
    return this.http.post('http://localhost:4000/api/v1/tourism/add_Admin', admin);
  }

  current_user() {
    return this.http.get<singindata>('http://localhost:4000/api/v1/tourism/currentuser');
  }

search_product(query: string = "") {
  return this.http.get<tourismproduct>(
    `http://localhost:4000/api/v1/tourism/get-products?search=${query}`
  );
}


}
