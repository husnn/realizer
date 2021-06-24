import puppeteer from 'puppeteer-extra';

import Session from './Session';
import CreateSessionDTO from './CreateSessionDTO';
import SessionFactory from './SessionFactory';
import ProxyFactory from '../Proxy/ProxyFactory';
import AccountFactory from '../Account/AccountFactory';
import RealizerFactory from '../Realizer/RealizerFactory';

export default class SessionService {
  sessions: Session[] = [];

  proxyFactory: ProxyFactory;
  accountFactory: AccountFactory;
  realizerFactory: RealizerFactory;
  sessionFactory: SessionFactory;

  constructor() {
    this.proxyFactory = new ProxyFactory();
    this.accountFactory = new AccountFactory();
    this.realizerFactory = new RealizerFactory();
    this.sessionFactory = new SessionFactory(
      this.proxyFactory,
      this.accountFactory,
      this.realizerFactory
    );
  }

  async create(data: CreateSessionDTO): Promise<Session | undefined> {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null });

    const session = await this.sessionFactory.create(data, browser);
    if (!session) return;

    this.sessions.push(session);

    return session;
  }
  
  async start(id: string): Promise<void> {
    const session = this.getSessionById(id);
    session?.realizer.executeRandomly();
  }

  getSessionById(id: string): Session | undefined {
    return this.sessions.find(session => session.id === id);
  }
}