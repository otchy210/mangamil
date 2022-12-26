import { HttpServer } from './HttpServer';

(async () => {
    const httpServer = new HttpServer();
    await httpServer.start();
    console.log(`http://localhost:${httpServer.port}`);
})();
