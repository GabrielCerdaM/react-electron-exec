const { Contract } = require('../Model/Contract');

class ContractRepository {

    getAll() {
        return Contract.findAll();
    }

    create(formData) {
        try {
            console.log('ContractRepository ', { formData });
            return Contract.create(formData)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ContractRepository();