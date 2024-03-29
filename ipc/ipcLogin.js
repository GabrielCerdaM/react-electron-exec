const { ipcMain } = require("electron");
const UserService = require("../Services/UserService");
// const { User } = require('./../Model/User');
// const {getAllUsers} = require("../Services/UserService");
// const UserRepository = require("../Repository/UserRepository");
const handleLogin = async () => {
    return true;
    // return await User.findAll();
}

function ipcLogin() {
    ipcMain.handle('login', handleLogin);

    ipcMain.on('formData', async (event, formData) => {
        // Handle formData as needed
        try {
            const resp = await UserService.create(formData);
            console.log({resp});
            event.reply('formData-reply', resp)
        } catch (error) {
            console.log(error);
        }
        // try {
        //     const resp = UserRepository.getAllUsers();
        //     console.log({resp});
        // } catch (error) {
        //     console.log({error});
        // }
    });
}
module.exports = { ipcLogin }