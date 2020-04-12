import { normalizePort } from './utils';

const config = {
    port: normalizePort(process.env.PORT),
    accessControlAllowOrigin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN || '*',
};

export default config;
