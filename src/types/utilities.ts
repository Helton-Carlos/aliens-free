export interface INotification {
  title: string;
  context: string;
  image: string;
}

export interface IInfo {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  image: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface ITable {
  day: number;
  historic: string;
  money: string;
  status: string;
}

export interface ILogin {
  email: string;
  id: number;
  password: string;
  token: string;
  user: string;
  age: string;
  money: string;
  image: string;
}