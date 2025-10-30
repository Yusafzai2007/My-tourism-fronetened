export interface signupdatauser {
  _id:string
  userName: string;
  email: string;
  password: string;
  role:string
}



export interface deleteuser {
  statuscode: number;
  tourism: {
    users: signupdatauser[];
  };
  message: string;
}
