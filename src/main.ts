import { format } from 'url';
import { join } from 'path';
import { app, BrowserWindow } from 'electron';

import {
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    INDEX_HTML_FILE_NAME,
    INDEX_HTML_FILE_PROTOCOL,
} from './constants';

let mainWindow: Electron.BrowserWindow;

const init = () => {
    mainWindow = new BrowserWindow({
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
    });
    mainWindow.loadURL(format({
        pathname: join(__dirname, INDEX_HTML_FILE_NAME),
        protocol: INDEX_HTML_FILE_PROTOCOL,
        slashes: true
    }));
    // mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools();
    mainWindow.on('close', () => app.quit());
};

app.on('ready', init);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (!mainWindow) {
        init();
    }
});
