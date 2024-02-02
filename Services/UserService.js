const UserRepository = require('./../Repository/UserRepository')

class UserService {
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