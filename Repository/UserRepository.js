const { Op } = require('sequelize');
const { User } = require('./../Model/User');

class UserRepository {

    login(email,password) {
        return User.findOne({
            where: {
                [Op.and]: [
                    {
                        email: {
                            [Op.eq]: `${email}`
                        }
                    },
                    {
                        password: {
                            [Op.eq]: `${password}`
                        }
                    }
                ]
            }
        })
    }
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