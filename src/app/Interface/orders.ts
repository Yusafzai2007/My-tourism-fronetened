// models/tourism-api.model.ts
export interface ApiResponse {
  statuscode: number;
  tourism: TourismData;
  message: string;
}

export interface TourismData {
  orders: Order[];
}

/** Top-level Order document */
export interface Order {
  _id: string;
  order: string;
  userId: User;
  productId: Product;
  cityId: City;
  order_date: string;             // e.g. "2025-09-12"
  adult_no: number;
  child_no: number;
  transport_type: string | null;
  total: number;
  private_adult_no: number;
  private_child_no: number;
  private_transport_type: string | null;
  first_name: string;
  last_name: string;
  address: string;
  payment_Method: string;
  city: string;
  state: string;
  country: string;
  name_On_Card: string;
  card_Number: string;
  zip: number | string;
  expiry: string;
  cvv: string;
  createdAt: string;              // ISO date string
  updatedAt: string;              // ISO date string
  __v?: number;
}

/** Embedded user object */
export interface User {
  _id: string;
  userName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

/** Embedded product object */
export interface Product {
  _id: string;
  tourservice?: string;
  duration?: string;
  transportService?: string;
  pickup?: string;
  producttitle?: string;
  productdescription?: string;
  discountEndDate?: string;
  quantity?: number;
  discountpercentage?: string;
  Isprivate?: boolean;
  privateAdultPrice?: number | null;
  privateChildPrice?: number | null;
  privatetransferprice?: number | null;
  discountedtotalprice?: number | null;
  thumbnailimage?: string[];      // array of image URLs
  adultbaseprice?: number | null;
  childbaseprice?: number | null;
  category?: string;
  translatelanguages?: string;
  wifi?: string;                  // source has "true" (string) and "available" etc => keep string
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

/** Embedded city object */
export interface City {
  _id: string;
  cityName: string;
  cityImage?: string;
  cityDescription?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
