export type User = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};

export type UserLogin = {
  email: string;
  password: string;
};
