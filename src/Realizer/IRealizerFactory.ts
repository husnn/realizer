import Realizer from './Realizer';

export default interface IRealizerFactory {
  create(id: string, browser: any): Promise<Realizer | undefined>
}