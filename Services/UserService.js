const { Op } = require('sequelize');
const UserRepository = require('./../Repository/UserRepository')

class UserService {
    async login(email, password) {
        try {
            const resp = await UserRepository.login(email, password);
            console.log('login', { resp });
            return resp;
        } catch (error) {
            console.log({ error });
        }
    }

    getAllUsers() {
        // return await User.findAll();
        return UserRepository.getAll();
    }

    create(formData) {
        try {
            return UserRepository.create(formData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserService();