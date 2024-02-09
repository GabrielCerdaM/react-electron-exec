const { ipcLogin } = require("./ipcLogin");
const { ipcTest } = require("./ipcTest");
const { ipcContract } = require("./ipcContract");
const { ipcDialog } = require("./ipcDialog");

function ipcHandler() {
  // ipcLogin();
  // ipcTest();
  ipcDialog();
  ipcContract();
}

module.exports = { ipcHandler };
