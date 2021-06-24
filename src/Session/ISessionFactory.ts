import Session from './Session';
import CreateSessionDTO from './CreateSessionDTO';
import IProxyFactory from 'src/Proxy/IProxyFactory';
import IAccountFactory from 'src/Account/IAccountFactory';
import IRealizerFactory from 'src/Realizer/IRealizerFactory';

export default interface ISessionFactory {
  create(
    data: CreateSessionDTO,
    browser: any,
    proxyFactory: IProxyFactory,
    accountFactory: IAccountFactory,
    realizerFactory: IRealizerFactory
  ): Promise<Session | undefined>;
}