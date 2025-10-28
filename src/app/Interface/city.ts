////////////////////////////////////      import cities ////////////////////////////

export interface User {
  id: String;
  cityName: String;
  cityImage: String;
  cityDescription: String;
  status: String;
  createdAt: string;
  updatedAt: string;
}

export interface tourismResponse {
  statuscode: number;
  tourism: User[];
  message: String;
}
