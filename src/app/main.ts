import { app, BrowserWindow } from 'electron';
import { HttpServer } from '../server/HttpServer';

const main = async () => {
    await app.whenReady();
    const window = new BrowserWindow({ width: 800, height: 600 });
    const httpServer = await new HttpServer().start();
    window.loadURL(`http://localhost:${httpServer.port}`);
};
main();
