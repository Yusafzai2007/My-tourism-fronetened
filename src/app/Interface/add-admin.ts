export interface UserResponse {
  statuscode: {
    success: boolean;
    data: {
      userName: string;
      email: string;
    };
  };
  message: string;
}
