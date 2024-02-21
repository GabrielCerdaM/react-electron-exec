const { Document } = require("../Model/Document");

class DocumentRepository {
  async getAll() {
    return await Document.findAll();
  }
  async findById(payload) {
    return await Document.findByPk(payload);
  }

  async create(payload) {
    return await Document.create(payload);
  }
}

module.exports = new DocumentRepository();
