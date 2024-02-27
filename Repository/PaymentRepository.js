const { Payment } = require("../Model/Payment");
class PaymentRepository {
  async getAll() {
    return await Payment.findAll();
  }

  async create(payload) {
    return await Payment.create(payload)
  }

  async delete(id) {
    return await Payment.destroy({
      where: {
        id
      }
    })
  }
}

module.exports = new PaymentRepository();
