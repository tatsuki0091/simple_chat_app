// export interface Submit {
//   submit: string;
//   label: string;
//   url: string;
// }

export interface LoginInterface extends Object {
  email: string;
  password: string;
}

export interface CreateUserInterface {
  username: string;
  email: string;
  password: string;
  created: Date;
}

export interface ResetPasswordInterface {
  email: string;
  updated: Date;
}
