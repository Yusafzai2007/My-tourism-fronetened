export interface TourismResponsePayment {
  statuscode: number;
  tourism: {
    user: UserTourism[];
  };
}

export interface UserTourism {
  _id: string;
  user_id: User;
  cart: CartItem[];
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItem {
  product_id: Product;
  city: City;
  order_date: string;
  adult_no: number;
  child_no: number;
  transport_type: string | number;
  private_adult_no: number;
  private_child_no: number;
  private_transport_type: string | null;
  total:number;
  _id: string;
}

export interface Product {
  _id: string;
  city: string;
  tourservice: string;
  duration: string;
  transportService: string;
  pickup: string;
  producttitle: string;
  productdescription: string;
  discountEndDate: string;
  quantity: number;
  discountpercentage: string;
  Isprivate: boolean;
  privateAdultPrice: number;
  privateChildPrice: number;
  privatetransferprice: number;
  discountedtotalprice: number;
  thumbnailimage: string[];
  adultbaseprice: number | null;
  childbaseprice: number | null;
  category: string;
  translatelanguages: string;
  wifi: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface City {
  _id: string;
  cityName: string;
  cityImage: string;
  cityDescription: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
