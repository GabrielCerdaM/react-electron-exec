const { app, BrowserWindow } = require('electron')
const path = require('path');



const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
        }
    })

    window.openDevTools();

    // Load the React app

    // const urlPath = path.join(__dirname, 'build', 'index.html');

    const url = path.join(__dirname, 'build', 'index.html');

    window.loadFile(url);
}
const { ipcHandler } = require('./ipc/ipcHandler');
ipcHandler();

app.whenReady().then(() => {
    createWindow()


    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})