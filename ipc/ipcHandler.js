const { ipcLogin } = require("./ipcLogin");
const { ipcTest } = require("./ipcTest");
const { ipcContract } = require("./ipcContract");
const { ipcDialog } = require("./ipcDialog");
const { ipcDocument } = require("./ipcDocuments");
const { ipcPayment } = require("./ipcPayment");

function ipcHandler() {
  // ipcLogin();
  // ipcTest();
  ipcDialog();
  ipcContract();
  ipcDocument();
  ipcPayment();
}

module.exports = { ipcHandler };
