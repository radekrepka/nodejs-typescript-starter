import express, { NextFunction, Request, Response } from 'express';
import config from '../config';

export class App {
    private readonly port: number;
    public expressApp: express.Application;

    constructor(port: number) {
        this.port = port;
        this.expressApp = express();
        this.config(port);
        this.routes();
    }

    public config(port: number ) {
        this.expressApp.set('port', port);
        this.expressApp.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', config.accessControlAllowOrigin);
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
            );
            res.header('Access-Control-Allow-Credentials', 'true');

            next();
        });
    }

    public routes(): void {
        const router: express.Router = express.Router();

        this.expressApp.use('/', router);
        this.expressApp.get('/health-check', (req: Request, res: Response) => {
            res.send('I am alive!');
        });
    }

    public getPort() {
        return this.port;
    }
}
