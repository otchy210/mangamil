import { app, BrowserWindow } from 'electron';

const main = async () => {
    await app.whenReady();
    const window = new BrowserWindow({ width: 800, height: 600 });
    window.loadFile('index.html');
};
main();
