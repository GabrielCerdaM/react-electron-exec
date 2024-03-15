const PaymentRepository = require("../Repository/PaymentRepository");

class PaymentService {
    async getAll() {
        try {
            const resp = await PaymentRepository.getAll()
            let payments = [];
            if (resp && resp.length > 0) {
                payments = resp.map(p => {
                    const { dataValues } = p
                    return dataValues
                })
                return payments;
            }
        } catch (error) {
            console.log({ error });
            return error;
        }
    }

    async getByContractId(contractId) {
        return await PaymentRepository.getByContractId(contractId)
    }

    async create(id, payload) {
        try {
            console.log('service',{id,payload});
            return await PaymentRepository.create({ ...payload, ContractId: parseInt(id)});
        } catch (error) {
            console.log({ error });
        }
    }

    async delete(id) {
        try {
            return await PaymentRepository.delete(id);
        } catch (error) {
            console.log({ error });
        }
    }
}

module.exports = new PaymentService();
