import Account from './Account';
import IAccountFactory from './IAccountFactory';

export default class AccountFactory implements IAccountFactory {
  async create(id: string): Promise<Account | undefined> {
    let account = undefined;

    return account;
  }
}