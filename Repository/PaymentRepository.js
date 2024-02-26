const { Payment } = require("../Model/Payment");
class PaymentRepository {
  async getAll() {
    return await Payment.findAll();
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
