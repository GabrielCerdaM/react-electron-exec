const { contextBridge, ipcRenderer } = require('electron/renderer');


contextBridge.exposeInMainWorld('api', {
    // window: (path) => ipcRenderer.send('window', path),
    // test: async () => await testConnection(),
    test: async (formData) => {
        ipcRenderer.on('formData-reply', (_event, arg) => {
            console.log('reply',arg) // prints "pong" in the DevTools console
        });
        ipcRenderer.send('formData', formData)
        // ipcRenderer.send('asynchronous-message', 'ping')
    },
    handleChannel: () => ipcRenderer.invoke('db'),
    login: () => ipcRenderer.invoke('login')
})