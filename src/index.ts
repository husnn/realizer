import SessionService from './Session/SessionService';

const sessionService = new SessionService();

(async () => {
  console.log('Welcome');
  await sessionService.create({ realizer: 'google' });
})();