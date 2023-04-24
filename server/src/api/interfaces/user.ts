export interface CreateUser {
  username: string;
  email: string;
  password: string;
  created: Date;
}

export interface ResetPassword {
  email: string;
  password: string;
  updated: Date;
}
