import Proxy from './Proxy';

export default interface IProxyFactory {
  create(id: string): Promise<Proxy | undefined>
}