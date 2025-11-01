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
 // ✅ Updated base URL to latest Vercel deployment
private baseUrl = 'https://tourism-n9mc0okiy-yusafzai2007s-projects.vercel.app/api/v1/tourism';

  constructor(private http: HttpClient) {}

  // ================= Authentication =================
  signup(signup: signupdata) {
    return this.http.post(`${this.baseUrl}/signup`, signup, { withCredentials: true });
  }

  login(login: logindata) {
    return this.http.post(`${this.baseUrl}/login`, login, { withCredentials: true });
  }

  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }

  // ================= Cities =================
  cities() {
    return this.http.get<tourismResponse>(`${this.baseUrl}/get-city`);
  }

  singlecity(cityName: string) {
    return this.http.get<tourismdata>(`${this.baseUrl}/single-citydata/${cityName}`);
  }

  // ================= Products =================
  allProducts() {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-products`);
  }

  singleProduct(id: string) {
    return this.http.get<tourismproduct>(`${this.baseUrl}/get-productsId/${id}`);
  }

  // ================= Booking =================
  booking(bookingdata: Booking) {
    return this.http.post(`${this.baseUrl}/booking`, bookingdata, { withCredentials: true });
  }

  bookingfetch() {
    return this.http.get<TourismResponsePayment>(`${this.baseUrl}/single-user-booking`, {
      withCredentials: true,
    });
  }

  deleteBooking(bookingId: string, cartItemId: string) {
    return this.http.delete<TourismResponsePayment>(
      `${this.baseUrl}/booking/${bookingId}/cart/${cartItemId}`,
      { withCredentials: true }
    );
  }

  // ================= Payment =================
  payment(payment: paymentAPI) {
    return this.http.post(`${this.baseUrl}/payment`, payment, { withCredentials: true });
  }

  getAllPayments() {
    return this.http.get(`${this.baseUrl}/get-allorders`, { withCredentials: true });
  }

  // ================= Users & Orders =================
  getUsers() {
    return this.http.get<signupdata>(`${this.baseUrl}/user`,{
      withCredentials:true
    });
  }

  getAllOrders() {
    return this.http.get<TourismApiResponse>(`${this.baseUrl}/get-allorders`);
  }
}