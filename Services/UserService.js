const { Op } = require('sequelize');
const UserRepository = require('./../Repository/UserRepository')

class UserService {
    async login(email, password) {
        try {
            const resp = await UserRepository.login(email, password);
            if (!resp) {
                throw new Error()
            }
            return true;
        } catch (error) {
            console.log({ error });
            return false;
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