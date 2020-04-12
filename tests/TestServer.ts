import { App } from '../src/api/App';
import { createServer, Server} from 'http';
import { AddressInfo } from 'net';

export default class TestServer {
    private app: App;
    private server: Server;

    constructor(port: number = 3000) {
        this.app = new App(port);
        this.server = createServer(this.app.expressApp);
    }

    public start(): void {
        this.server.listen(this.app.getPort());
    }

    public stop(): void {
        this.server.close();
    }

    public getUrlAddress(): string {
        const port = (this.server.address() as AddressInfo).port;
        if (port == null) {
            throw new Error(`Missing port, did you call start? given: ${this.app.getPort()}`);
        }

        return `http://localhost:${port}`;
    }
}
