const { ipcMain, dialog } = require("electron");

const ipcDialog = () => {
  ipcMain.handle("dialog", (event, method, params) => {
    return dialog[method](params);
  });
};

module.exports = { ipcDialog };
