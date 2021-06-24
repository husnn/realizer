import { Page } from 'puppeteer';

import { randInt } from '../utils';

export default abstract class Driver {
  abstract tasks:  Array<(...args: any) => Promise<void>>;
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  randomTask = (): () => Promise<void> => {
    const taskIndex = randInt(this.tasks.length);
    return this.tasks[taskIndex];
  }
}