import { createServer, IncomingMessage, Server, ServerResponse } from 'node:http';
import { AddressInfo } from 'node:net';
import { ContentTypes } from './ContentType';
import { HttpStatuses } from './HttpStatus';

export class HttpServer {
    private _port = -1;
    private _httpServer: Server;

    constructor() {
        this._httpServer = createServer((request: IncomingMessage, response: ServerResponse) => {
            console.log({ request, response });
            response.writeHead(HttpStatuses.OK, {
                'Content-Type': ContentTypes.HTML,
            });
            response.end(`<body>response from api server</body>`);
        });
    }

    public start(): Promise<HttpServer> {
        return new Promise((resolve) => {
            this._httpServer.listen(0, () => {
                this._port = (this._httpServer.address() as AddressInfo).port;
                resolve(this);
            });
        });
    }

    public get port(): number {
        return this._port;
    }

    public close(): Promise<HttpServer> {
        return new Promise((resolve) => {
            this._httpServer.close(() => {
                resolve(this);
            });
        });
    }
}
