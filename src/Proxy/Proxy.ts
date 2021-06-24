export interface IProxy {
  id: string;
  url: string;
}

export default class Proxy {
  id: string;
  url: string;

  constructor(data: IProxy) {
    this.id = data.id;
    this.url = data.url;
  }
}