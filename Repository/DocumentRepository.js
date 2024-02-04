const { Document } = require('../Model/Document')

class DocumentRepository {

    async getAll () {
        return await Document.findAll();
    }
}

module.exports = new DocumentRepository();