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
  constructor(private http: HttpClient) {}

  signup(signup: signupdata) {
    return this.http.post('http://localhost:4000/api/v1/tourism/signup', signup);
  }

  login(login: logindata) {
    return this.http.post('http://localhost:4000/api/v1/tourism/login', login, {
      withCredentials: true,
    });
  }
  cities() {
    return this.http.get<tourismResponse>('http://localhost:4000/api/v1/tourism/get-city');
  }

  singlecity(cityName: String) {
    return this.http.get<tourismdata>(
      `http://localhost:4000/api/v1/tourism/single-citydata/${cityName}`
    );
  }

  singlieProduct(id: String) {
    return this.http.get<tourismproduct>(
      `http://localhost:4000/api/v1/tourism/get-productsId/${id}`
    );
  }

  Prducts() {
    return this.http.get<tourismproduct>('http://localhost:4000/api/v1/tourism/get-products');
  }

  booking(bookingdata: Booking) {
    return this.http.post('http://localhost:4000/api/v1/tourism/booking', bookingdata, {
      withCredentials: true,
    });
  }

  bookingfetch() {
    return this.http.get<TourismResponsePayment>(
      'http://localhost:4000/api/v1/tourism/single-user-booking',
      {
        withCredentials: true,
      }
    );
  }

  deletebooking(bookingId: string, cartItemId: string) {
    return this.http.delete<TourismResponsePayment>(
      `http://localhost:4000/api/v1/tourism/booking/${bookingId}/cart/${cartItemId}`
    );
  }

  payment(payment: paymentAPI) {
    return this.http.post('http://localhost:4000/api/v1/tourism/payment', payment, {
      withCredentials: true,
    });
  }

  getusers() {
    return this.http.get<signupdata>('http://localhost:4000/api/v1/tourism/user');
  }

  getallorders() {
    return this.http.get<TourismApiResponse>('http://localhost:4000/api/v1/tourism/get-allorders');
  }

  logout() {
    return this.http.post(
      'http://localhost:4000/api/v1/tourism/logout',
      {},
      {
        withCredentials: true,
      }
    );
  }

  allproducts() {
    return this.http.get<tourismproduct>('http://localhost:4000/api/v1/tourism/get-products');
  }

  paymentget() {
    return this.http.get('http://localhost:4000/api/v1/tourism/get-allorders', {
      withCredentials: true,
    });
  }
}
