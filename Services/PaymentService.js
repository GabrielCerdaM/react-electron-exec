const PaymentRepository = require("../Repository/PaymentRepository");

class PaymentService {
    getAll() {
        return PaymentRepository.getAll()
    }
}