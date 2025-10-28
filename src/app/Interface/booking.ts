// Single product booking
export interface BookingItem {
  product_id: string;
  order_date: string;
  adult_no: number;
  child_no: number;
  transport_type: number;
  private_adult_no: number;
  private_child_no: number;
  private_transport_type: number;
  total: number;
}

// Full booking payload (single or multiple products)
export interface Booking {
  products: BookingItem[];
}
