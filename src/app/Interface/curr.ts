export interface Usercurrent {
  _id: string;
  userName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Tourism {
  users: Usercurrent; // ✅ single user object
}

export interface ApiResponsecurrent {
  statuscode: number;
  tourism: Tourism;
  message: string;
}
