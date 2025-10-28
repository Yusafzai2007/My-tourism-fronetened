export interface cityInfo {
  _id: String;
  cityName: String;
  cityImage: String;
  cityDescription: String;
  status: String;
}

export interface productResponse {
  _id: string;
  city: cityInfo;
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
  category: string;
  translatelanguages: string;
  wifi: string;
  childbaseprice: number;
  adultbaseprice: number;
  createdAt: string;
  updatedAt: string;
}

export interface tourismdata {
  statuscode: number;
  tourism: {
    city: productResponse[];
  };
  message: String;
}
