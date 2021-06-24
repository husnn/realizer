import { Browser } from 'puppeteer';

import Driver from '../Driver/Driver';
import { randInt, wait } from '../utils';

export default abstract class Realizer {
  abstract id: string;
  
  browser: Browser;
  abstract drivers: Driver[];
  
  isStopped: boolean = false;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  async executeRandomly() {
    while (!this.isStopped) {
      const driver = this.getRandomDriver();
      await this.runRandomTask(driver);
      await wait(1000);
    }
  }

  stop() {
    this.isStopped = true;
  }

  getRandomDriver() {
    const driverIndex = randInt(this.drivers.length);
    return this.drivers[driverIndex];
  }
  
  async runRandomTask(driver: Driver) {
    await driver.randomTask().call(driver);
  }
}