const { User } = require('./../Model/User');

class UserRepository {

    getAll() {
        return User.findAll();
    }

    create(formData) {
        try {
            console.log('UserRepository ', { formData });
            return User.create(formData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserRepository();