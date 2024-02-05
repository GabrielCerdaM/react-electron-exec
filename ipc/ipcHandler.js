const {ipcLogin} = require('./ipcLogin');
const {ipcTest} = require('./ipcTest');
const { ipcContract } = require('./ipcContract');

function ipcHandler() {
    ipcLogin();
    ipcTest();

    ipcContract();
}


module.exports = { ipcHandler }