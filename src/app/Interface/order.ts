// models/tourism-response.ts

export interface TourismApiResponse {
  statuscode: number;
  tourism: TourismData;
  message: string;
}
// API response ka root object
// Urdu: API response ka root object

export interface TourismData {
  orders: Order[];
}
// tourism object jisme orders array hai
// Urdu: tourism object jisme orders ki list hai

export interface Order {
  _id: string;
  order: string;
  userId: UserSummary | null;
  productId: Product | null;
  cityId: City | null;
  order_date: string; // original string (e.g. "11/12/2025" ya ISO) — rakhna string behtar
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
  payment_Method: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  name_On_Card?: string | null;
  card_Number?: string | null;
  zip?: number | string | null;
  expiry?: string | null;
  cvv?: string | null;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
// single order ka shape
// Urdu: ek order ka structure

export interface UserSummary {
  _id: string;
  userName: string;
  email: string;
  role?: string | null;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
// userId ke andar jo summary object hai
// Urdu: user ki summary jo userId field mein hai

export interface Product {
  _id: string;
  tourservice?: string | null;
  duration?: string | null;
  transportService?: string | null;
  pickup?: string | null;
  producttitle?: string | null;
  productdescription?: string | null;
  discountEndDate?: string | null;
  quantity?: number | null;
  discountpercentage?: string | null;
  Isprivate?: boolean;
  privateAdultPrice?: number | null;
  privateChildPrice?: number | null;
  privatetransferprice?: number | null;
  discountedtotalprice?: number | null;
  thumbnailimage?: string[]; // array of URLs
  adultbaseprice?: number | null;
  childbaseprice?: number | null;
  category?: string | null;
  translatelanguages?: string | null;
  wifi?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  __v?: number;
}
// productId ke andar product ka detailed object
// Urdu: product object jo productId mein aata hai

export interface City {
  _id: string;
  cityName?: string | null;
  cityImage?: string | null;
  cityDescription?: string | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  __v?: number;
}
// cityId ke andar city ka object
// Urdu: city ka object jo cityId mein aata hai
