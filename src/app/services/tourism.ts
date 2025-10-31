import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindata, signupdata } from '../Interface/signup';
import { tourismResponse } from '../Interface/city';
import { tourismdata } from '../Interface/product';
import { tourismproduct } from '../Interface/products';
import { Booking } from '../Interface/booking';
import { TourismResponsePayment } from '../Interface/payment';
import { paymentAPI } from '../Interface/payment-api';
import { TourismApiResponse } from '../Interface/order';

@Injectable({
  providedIn: 'root',
})
export class Tourism {
private baseUrl = 'https://tourism-1g0vf2k6r-yusafzai2007s-projects.vercel.app/api/v1/tourism';

  constructor(private http: HttpClient) {}

  signup(signup: signupdata) {
    return this.http.post(`${this.baseUrl}/signup`, signup);
  }

  login(login: logindata) {
    return this.http.post(`${this.baseUrl}/login`, login, { withCredentials: true });
  }

  cities() {
    return this.http.get<tourismResponse>(`${this.baseUrl}/get-city`);
  }

  singlecity(cityName: string) {
    return this.http.get<tourismdata>(`${this.baseUrl}/single-citydata/${cityName}`);
  }

  singlieProduct(id: string) {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-productsId/${id}`);
  }

  Prducts() {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-products`);
  }

  booking(bookingdata: Booking) {
    return this.http.post(`${this.baseUrl}/booking`, bookingdata, { withCredentials: true });
  }

  bookingfetch() {
    return this.http.get<TourismResponsePayment>(`${this.baseUrl}/single-user-booking`, {
      withCredentials: true,
    });
  }

  deletebooking(bookingId: string, cartItemId: string) {
    return this.http.delete<TourismResponsePayment>(
      `${this.baseUrl}/booking/${bookingId}/cart/${cartItemId}`
    );
  }

  payment(payment: paymentAPI) {
    return this.http.post(`${this.baseUrl}/payment`, payment, { withCredentials: true });
  }

  getusers() {
    return this.http.get<signupdata>(`${this.baseUrl}/user`);
  }

  getallorders() {
    return this.http.get<TourismApiResponse>(`${this.baseUrl}/get-allorders`);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }

  allproducts() {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-products`);
  }

  paymentget() {
    return this.http.get(`${this.baseUrl}/get-allorders`, { withCredentials: true });
  }
}
