const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("api", {
  dialog: async (method, config) => {
    return ipcRenderer
      .invoke("dialog", method, config)
      .then((result) => result);
  },
  contractOperation: ({ action, payload, id }) => {
    return ipcRenderer
      .invoke("contract-operation", { action, payload, id })
      .then((result) => {
        console.log("ipcRenderer invoke contract-operation", { result });
        return result;
      })
      .catch((error) => error);
  },
});
