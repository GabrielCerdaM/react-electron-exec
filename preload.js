const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("api", {
  test: async (formData) => {
    ipcRenderer.on("formData-reply", (_event, arg) => {
      console.log("reply", arg); // prints "pong" in the DevTools console
    });
    ipcRenderer.send("formData", formData);
  },
  handleChannel: () => ipcRenderer.invoke("db"),
  login: () => ipcRenderer.invoke("login"),
  contractOperation: ({ action, payload, id }) => {
    return ipcRenderer
      .invoke("contract-operation", { action, payload, id })
      .then((result) => {
        console.log("ipcRenderer invoke contract-operation", { result });
        return result;
      });
    // ipcRenderer.send('contract-operation', { model: 'User', action: 'add', payload: formData });
    // ipcRenderer.on('contract-operation-reply', (_event, arg) => {
    //     console.log('contract-operation-reply', arg) // prints "pong" in the DevTools console
    // });
  },
});
