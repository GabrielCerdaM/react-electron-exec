const { ipcMain } = require("electron");
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
        console.log({ formData });
        return await setTimeout(() => {
            return formData;
        }, 1);
        // try {
        //     const resp = UserRepository.create(formData);
        //     console.log({resp});
        // } catch (error) {
        //     console.log({error});
        // }
    });
}
module.exports = { ipcLogin }