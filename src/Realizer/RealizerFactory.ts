import GoogleRealizer from './GoogleRealizer';
import IRealizerFactory from './IRealizerFactory';
import Realizer from './Realizer';

export default class RealizerFactory implements IRealizerFactory {
  async create(id: string, browser: any): Promise<Realizer | undefined>  {
    let realizer = undefined;

    switch (id) {
      case 'google':
        realizer = new GoogleRealizer(browser);
    }

    return realizer;
  }
}