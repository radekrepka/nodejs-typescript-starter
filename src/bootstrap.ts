import { App } from './api/App';
import http from 'http';
import config from './config';

const app = new App(config.port);
const server = http.createServer(app.expressApp);

server.listen(config.port);

console.log(`Server listening on port ${app.getPort()}`);
