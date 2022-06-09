import App from './app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

async function main() {
  const app = new App([new IndexRoute()]);
  // noinspection ES6MissingAwait
  app.init();
}

// noinspection JSIgnoredPromiseFromCall
main();
