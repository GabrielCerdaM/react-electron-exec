const { ipcMain } =  require("electron");
// const { User } = require('./../Model/User');
const handleTest = async () => {
    return null;
    // return await User.findAll();
}

function ipcTest() {
    ipcMain.handle('db', handleTest);
}

module.exports = { ipcTest }