import IProxyFactory from './IProxyFactory';
import Proxy from './Proxy';

export default class ProxyFactory implements IProxyFactory {
  async create(id: string): Promise<Proxy | undefined> {
    let proxy = undefined;

    return proxy;
  }
}