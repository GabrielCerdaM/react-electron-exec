const { Payment } = require("../Model/Payment");
class PaymentRepository {
  async getAll() {
    return await Payment.findAll();
  }
}

module.exports = new PaymentRepository();
