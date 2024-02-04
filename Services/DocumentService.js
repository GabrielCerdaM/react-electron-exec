const DocumentRepository = require('../Repository/DocumentRepository')

class DocumentService {

    getAll() {
        return DocumentRepository.getAll();
    }
}

module.exports = { DocumentService }