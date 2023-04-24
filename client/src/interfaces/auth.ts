export interface Submit {
  submit: string;
  label: string;
  url: string;
}

export interface CreateUserInterface {
  username: string;
  email: string;
  password: string;
  created: Date;
}
