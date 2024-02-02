const { ipcMain } = require("electron");
const UserService = require("../Services/UserService");

function ipcContract() {
    // ipcMain.on('contract-create', async (event, { model, action, payload }) => {
    //     try {
    //         const resp = UserService.create(payload);
    //         console.log('on contract-create',{resp});
    //     } catch (error) {
    //         console.log({error});
    //     }
    // });
    ipcMain.handle('contract-create', async (event, payload) => {
        try {
            const resp = UserService.create(payload);
            console.log('ipcMain handle contract-create', { resp });
            return resp;
        } catch (error) {
            console.log({ error });
        }
    })
}
module.exports = { ipcContract }