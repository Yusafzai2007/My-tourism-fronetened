export interface signupdata {
  
  userName: string;
  email: string;
  password: string;
}

export interface logindata {
  email: string;
  password: string;
}

export interface singindata {
  statuscode: number;
  tourism: {
    users: signupdata[];
  };
  message: string;
}
