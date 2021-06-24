import Account from 'src/Account/Account';
import Proxy from 'src/Proxy/Proxy';
import Realizer from 'src/Realizer/Realizer';

export type ISession = {
  id: string;
  proxy?: Proxy;
  account?: Account;
  realizer: Realizer;
}

export default class Session implements ISession {
  id: string;
  proxy?: Proxy;
  account?: Account;
  realizer: Realizer;

  constructor(data: ISession) {
    this.id = data.id;
    this.proxy = data.proxy;
    this.account = data.account;
    this.realizer = data.realizer;
  }
}