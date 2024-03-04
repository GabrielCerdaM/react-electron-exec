const { ipcMain } = require("electron");
const UserService = require("../Services/UserService");

function ipcUser() {
    const handleLogin = async (email, password) => {
        return await UserService.login(email, password);
    }

    ipcMain.handle("user-operation", async (event, data) => {
        try {
            let result;
            const { action, payload, id } = data;
            const { email, password } = payload
            console.log({data, payload,email,password});
            if (!email || !password) {
                throw new Error('Credenciales invalida')
            }
            switch (action) {
                case "login":
                    result = await handleLogin(email, password);
                    break;
                default:
                    result = null;
                    break;
            }
            return result;
        } catch (error) {
            console.log({ error });
            return error
        }
    });
}

module.exports = { ipcUser }