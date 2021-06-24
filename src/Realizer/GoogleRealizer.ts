import Driver from '../Driver/Driver';
import YouTubeDriver from '../Driver/YouTubeDriver';
import Realizer from './Realizer';

export default class GoogleRealizer extends Realizer {
  id: string = 'google';
  
  drivers: Driver[] = [];

  constructor(browser: any) {
    super(browser);
    this.init();
  }

  async init() {
    const page = await this.browser.newPage();
    await this.login(page);

    this.drivers.push(new YouTubeDriver(page));

    this.executeRandomly();
  }

  async login(page: any) {}
}