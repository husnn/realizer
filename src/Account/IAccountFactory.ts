import Account from './Account';

export default interface IAccountFactory {
  create(id: string): Promise<Account | undefined>
}