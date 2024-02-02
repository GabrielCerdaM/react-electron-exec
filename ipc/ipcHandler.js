const {ipcLogin} = require('./ipcLogin');
const {ipcTest} = require('./ipcTest');

function ipcHandler() {
    ipcLogin();
    ipcTest();
}


module.exports = { ipcHandler }