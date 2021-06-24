import Account from '../Account/Account';
import Session, { ISession } from './Session';
import CreateSessionDTO from './CreateSessionDTO';
import IProxyFactory from '../Proxy/IProxyFactory';
import IAccountFactory from '../Account/IAccountFactory';
import IRealizerFactory from '../Realizer/IRealizerFactory';
import { uniqueId } from '../utils';
import ISessionFactory from './ISessionFactory';
import Proxy from '../Proxy/Proxy';

export default class SessionFactory implements ISessionFactory {
  proxyFactory: IProxyFactory;
  accountFactory: IAccountFactory;
  realizerFactory: IRealizerFactory;

  constructor(
    proxyFactory: IProxyFactory,
    accountFactory: IAccountFactory,
    realizerFactory: IRealizerFactory
    ) {
    this.proxyFactory = proxyFactory;
    this.accountFactory = accountFactory;
    this.realizerFactory = realizerFactory;
  }

  async create(data: CreateSessionDTO, browser: any): Promise<Session | undefined> {
    let id = uniqueId();

    let proxy: Proxy | undefined,
      account: Account | undefined = undefined;

    if (data.proxy) {
      proxy = await this.proxyFactory.create(data.proxy);
    }

    if (data.account) {
      account = await this.accountFactory.create(data.account);
    }

    const realizer = await this.realizerFactory.create(data.realizer, browser);

    if (!realizer) return;

    const sessionData = (): ISession => ({
      id,
      ...proxy && { proxy },
      ...account && { account },
      realizer
    });

    return new Session(sessionData());
  }
}