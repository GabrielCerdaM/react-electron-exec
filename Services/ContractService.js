const ContractRepository = require('../Repository/ContractRepository')

class ContractService {
    getAll() {
        // return await User.findAll();
        return ContractRepository.getAll();
    }

    create(formData) {
        try {
            return ContractRepository.create(formData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ContractService();