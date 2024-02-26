const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("api", {
  dialog: async (method, config) => {
    return ipcRenderer
      .invoke("dialog", method, config)
      .then((result) => result);
  },
  documentOperation: async ({ action, payload, id }) => {
    try {
      const result = await ipcRenderer.invoke("document-operation", {
        action,
        payload,
        id,
      });
      console.log("ipcRenderer invoke document", { result });
      return result;
    } catch (error) {
      return error;
    }
  },
  paymentOperation: async ({ action, payload, id }) => {
    try {
      console.log('payment-operation', { action, payload, id });
      const result = await ipcRenderer.invoke("payment-operation", {
        action,
        payload,
        id,
      });
      console.log("ipcRenderer invoke payments", { result });
      return result;
    } catch (error) {
      return error;
    }
  }
  ,
  contractOperation: async ({ action, payload, id }) => {
    try {
      const result = await ipcRenderer.invoke("contract-operation", {
        action,
        payload,
        id,
      });
      console.log("ipcRenderer invoke contract-operation", { result });
      return result;
    } catch (error) {
      return error;
    }
  },
});
