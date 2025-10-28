export interface cityInfo {
  _id: string;
  cityName: string;
  cityImage: string;
  cityDescription: string;
  status: string;
}

export interface productResponsedata {
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

export interface tourismproduct {
  statuscode: number;
  tourism: {
    Product: productResponsedata[];
  };
  message: string; // ✅ fixed type
}
