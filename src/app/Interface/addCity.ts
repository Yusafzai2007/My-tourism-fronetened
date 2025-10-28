export interface User {
  _id: string;
  cityName: string;
  cityImage: string;
  cityDescription: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface tourismResponse {
  statuscode: number;
  tourism: User[];
  message: string;
}
