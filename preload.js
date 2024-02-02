const { contextBridge, ipcRenderer } = require('electron/renderer');


contextBridge.exposeInMainWorld('api', {
    test: async (formData) => {
        ipcRenderer.on('formData-reply', (_event, arg) => {
            console.log('reply', arg) // prints "pong" in the DevTools console
        });
        ipcRenderer.send('formData', formData)
    },
    handleChannel: () => ipcRenderer.invoke('db'),
    login: () => ipcRenderer.invoke('login'),
    createContract: (formData) => {
        ipcRenderer.invoke('contract-create',{ model: 'User', action: 'add', payload: formData }).then(result => {
            console.log('ipcRenderer invoke contract-create',{result});
        })
        // ipcRenderer.send('contract-create', { model: 'User', action: 'add', payload: formData });
        // ipcRenderer.on('contract-create-reply', (_event, arg) => {
        //     console.log('contract-create-reply', arg) // prints "pong" in the DevTools console
        // });
    },
})