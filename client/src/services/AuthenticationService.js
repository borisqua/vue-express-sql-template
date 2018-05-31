// noinspection NpmUsedModulesInstalled
import Api from '@/services/Api';

// noinspection JSUnusedGlobalSymbols
export default {
  register(credentials) {
    return Api().post('/register', credentials);
  }
};

/*AuthenticationService.register({
  email: 'testing@gmail.com',
  password: '123456'
});*/
