export default class Account {
  emailAddress: string;
  password: string;

  constructor(emailAddress: string, password: string) {
    this.emailAddress = emailAddress;
    this.password = password;
  }
}