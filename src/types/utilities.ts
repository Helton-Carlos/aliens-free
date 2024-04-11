export interface IUserInfo {
  name: string;
  email: string;
  id?: number;
  password?: string;
  token?: string;
  age?: string;
  user: string;
  money: string;
  profession: string;
  image: string;
}

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
