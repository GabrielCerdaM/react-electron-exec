const { ipcMain, dialog } = require("electron");
const { constants } = require("fs/promises");
const os = require('os')
const path = require('path')

const ipcDialog = () => {
  ipcMain.handle("dialog", async (event, method, params) => {
    return await dialog[method](params);
  });
};

module.exports = { ipcDialog };
