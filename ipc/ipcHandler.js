const { ipcLogin } = require("./ipcLogin");
const { ipcTest } = require("./ipcTest");
const { ipcContract } = require("./ipcContract");
const { ipcDialog } = require("./ipcDialog");
const { ipcDocument } = require("./ipcDocuments");

function ipcHandler() {
  // ipcLogin();
  // ipcTest();
  ipcDialog();
  ipcContract();
  ipcDocument();
}

module.exports = { ipcHandler };
